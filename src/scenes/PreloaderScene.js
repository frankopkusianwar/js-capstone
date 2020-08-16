/* eslint no-undef: 0 */
import 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    // add logo image
    this.add.image(400, 200, 'logo');

    // display progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();

    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 290, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 300, 300 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    // remove progress bar when complete
    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    // load assets needed in our game
    this.load.image('background', 'src/assets/bg_layer1.png');
    this.load.image('intro_button1', 'src/assets/ui/intro_button1.png');
    this.load.image('intro_button2', 'src/assets/ui/intro_button2.png');
    this.load.image('start_button1', 'src/assets/ui/start_button1.png');
    this.load.image('start_button2', 'src/assets/ui/start_button2.png');
    this.load.image('option_button1', 'src/assets/ui/option_button1.png');
    this.load.image('option_button2', 'src/assets/ui/option_button2.png');
    this.load.image('credit_button1', 'src/assets/ui/credit_button1.png');
    this.load.image('credit_button2', 'src/assets/ui/credit_button2.png');
    this.load.image('leader_button1', 'src/assets/ui/leader_button1.png');
    this.load.image('leader_button2', 'src/assets/ui/leader_button2.png');

    // map tiles
    this.load.image('tiles', 'src/assets/ui/map/spritesheet.png');

    // map in json format
    this.load.tilemapTiledJSON('map', 'src/assets/ui/map/map.json');

    // battle map in json format
    this.load.tilemapTiledJSON('battle-map', 'src/assets/ui/map/battle.json');

    // hero spritesheet
    this.load.spritesheet('warrior', 'src/assets/ui/hero_sprite.png', { frameWidth: 32, frameHeight: 64 });

    // fireball image
    this.load.image('fireball', 'src/assets/ui/fireball.png');

    // explosion image
    this.load.spritesheet('explosion', 'src/assets/ui/explosion.png', { frameWidth: 400, frameHeight: 400 });

    // sword flash image
    this.load.spritesheet('sword_flash', 'src/assets/ui/sword_flash.png', { frameWidth: 33, frameHeight: 33 });

    // kraken spritesheet
    this.load.spritesheet('dragon', 'src/assets/ui/Dragon.png', { frameWidth: 200, frameHeight: 128 });

  }

  ready() {
    
    this.scene.start('Title');
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}
