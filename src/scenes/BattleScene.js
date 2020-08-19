/* eslint class-methods-use-this: 0 */
/* eslint no-undef: 0 */

import 'phaser';
import Fireball from '../Fireball';
import Warrior from '../objects/Warrior';
import Dragon from '../objects/Dragon';
import entity from '../config/EntityConfig';

export default class BattleScene extends Phaser.Scene {
  constructor() {
    super('Battle');

    this.swordDamage = entity.swordDamage;
    this.fireballDamage = entity.fireballDamage;
    this.initialScore = 0;
    localStorage.setItem('score', this.initialScore);
  }

  showWinBanner() {
    this.winText = this.add.text(330, 115, 'You Won!!', { fontSize: '30px', fill: '#fff' });
    this.banner = this.add.graphics();

    this.banner.lineStyle(1, 0xffffff, 0.8);
    this.banner.fillStyle(0x031f4c, 0.3);
    this.banner.strokeRect(250, 100, 300, 60);
    this.banner.fillRect(250, 100, 300, 60);
  }

  shootFireball(angle) {
    (() => new Fireball(this, angle))();
  }

  updateDragonHealth(dragonHealth, damage) {
    return dragonHealth - damage;
  }

  onAttack() {
    if (Phaser.Input.Keyboard.JustDown(this.space)) {
      this.dragonHealth = this.updateDragonHealth(this.dragonHealth, this.swordDamage);

      this.swordFlash.x = this.warrior.x + 20;
      this.swordFlash.y = this.warrior.y - 20;
      this.swordFlash.visible = true;
      this.swordFlash.anims.play('flash', true);
    } else {
      this.swordFlash.visible = false;
    }
  }

  updateWarriorHealth(warriorHealth, damage) {
    return warriorHealth - damage;
  }

  damageWarrior(projectile) {
    projectile.destroy();

    this.warriorHealth = this.updateWarriorHealth(this.warriorHealth, this.fireballDamage);
  }


  warriorDied() {
    this.scene.start('GameOver');
  }

  dragonDied() {
    this.showWinBanner();

    this.explosion.visible = true;
    this.explosion.anims.play('explode', true);

    this.time.delayedCall(3000, () => {
      const updatedScore = parseInt(localStorage.getItem('score'), 10) + 100;
      localStorage.setItem('score', JSON.stringify(updatedScore));
      this.scene.start('World');
    }, [], this);
  }

  create() {
    this.warriorHealth = entity.warriorHealth;
    this.dragonHealth = entity.dragonHealth;

    const battleMap = this.make.tilemap({ key: 'battle-map' });

    const tiles = battleMap.addTilesetImage('spritesheet', 'tiles');

    battleMap.createStaticLayer('Tile Layer 1', tiles, 0, 0);

    const border = battleMap.createStaticLayer('border', tiles, 0, 0);
    border.setCollisionByExclusion([-1]);

    this.warrior = new Warrior(this, 400, 590);

    this.warriorHealthText = this.add.text(350, 590, `Health: ${this.warriorHealth}`, { fontSize: '16px', fill: '#000' });

    this.physics.add.collider(this.warrior, border);

    this.warrior.createAnimation();

    this.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });

    this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.dragon = new Dragon(this, 400, 200);
    this.dragonHealthText = this.add.text(300, 80, `Health: ${this.dragonHealth}`, { fontSize: '26px', fill: '#000' });

    this.physics.add.collider(this.warrior, this.dragon, this.onAttack, false, this);

    this.lastFired = 0;
    this.projectiles = this.add.group();

    this.physics.add.collider(this.projectiles, this.warrior, this.damageWarrior, false, this);

    this.explosion = this.add.sprite(400, 320, 'explosion');
    this.explosion.visible = false;

    this.anims.create({
      key: 'explode',
      frames: this.anims.generateFrameNumbers('explosion', {
        start: 0,
        end: 15,
      }),
      frameRate: 5,
      repeat: 0,
      hideOnComplete: true,
    });

    this.swordFlash = this.add.sprite(this.warrior.x + 20, this.warrior.y + 20, 'sword_flash');
    this.swordFlash.setScale(1.5);
    this.swordFlash.visible = false;

    this.anims.create({
      key: 'flash',
      frames: this.anims.generateFrameNumbers('sword_flash', {
        start: 0,
        end: 4,
      }),
      frameRate: 5,
      repeat: 0,
      hideOnComplete: true,
    });
  }

  update(time) {
    this.warriorHealthText.x = this.warrior.x - 50;
    this.warriorHealthText.y = this.warrior.y - 45;
    this.warriorHealthText.text = `Health: ${this.warriorHealth}`;

    this.dragonHealthText.text = `Health: ${this.dragonHealth}`;

    this.dragon.anims.play('idle', true);

    this.warrior.body.setVelocity(0);

    if (this.inputKeys.left.isDown) {
      this.warrior.body.setVelocityX(-100);
    } else if (this.inputKeys.right.isDown) {
      this.warrior.body.setVelocityX(100);
    }

    if (this.inputKeys.up.isDown) {
      this.warrior.body.setVelocityY(-100);
    } else if (this.inputKeys.down.isDown) {
      this.warrior.body.setVelocityY(100);
    }

    if (this.inputKeys.left.isDown) {
      this.warrior.anims.play('left', true);
    } else if (this.inputKeys.right.isDown) {
      this.warrior.anims.play('right', true);
    } else if (this.inputKeys.up.isDown) {
      this.warrior.anims.play('up', true);
    } else if (this.inputKeys.down.isDown) {
      this.warrior.anims.play('down', true);
    } else {
      this.warrior.anims.stop();
      this.warrior.setFrame(0);
    }

    if (time > this.lastFired) {
      const value = Phaser.Math.Between(0, 360);
      this.shootFireball(value);
      this.lastFired = time + 250;
    }

    for (let i = 0; i < this.projectiles.getChildren().length; i += 1) {
      const fireball = this.projectiles.getChildren()[i];

      fireball.update();
    }

    if (this.warriorHealth <= 0) {
      this.warriorDied();
    }

    if (this.dragonHealth <= 0) {
      this.dragonDied();
    }
  }
}
