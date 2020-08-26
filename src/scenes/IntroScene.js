import Phaser from 'phaser';
import config from '../config/config';

export default class IntroScene extends Phaser.Scene {
  constructor() {
    super('Intro');
  }

  create() {
    this.cameras.main.setBackgroundColor('#000111');
    this.introText = this.add.text(0, 0, 'Introduction', { fontSize: '35px', fill: '#fff' });
    this.bodyText = this.add.text(0, 0, 'Thousands of years ago\nbefore dragon extinction.\nthere lived a dragon killer\nhis name was Daniel,\nhe was a young man\nand son to a\ndragon slayer\nhe was trained by\nhis father to slay dragons\nthat were terrorising\nthe human race\ndaniel was the\nonly hope for humans\nwho were constantly being\nattacked by dragons,\nHe decides to wage\nwar on dragons\nBy attacking them in\ntheir own territory\n\nGood luck!', { fontSize: '30px', fill: '#fff' });
    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.skipText = this.add.text(10, 10, 'Press SPACE\nto skip', { fontSize: '10px', fill: '#fff' });

    Phaser.Display.Align.In.Center(
      this.introText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.bodyText,
      this.zone,
    );

    this.bodyText.setY(650);

    this.introTween = this.tweens.add({
      targets: this.introText,
      y: -200,
      duration: 3000,
      delay: 1000,
    });

    this.bodyTextTween = this.tweens.add({
      targets: this.bodyText,
      y: -500,
      duration: 55000,
      delay: 0,
      onComplete: (() => {
        this.scene.start('World');
      }),
    });
  }

  update() {
    if (this.keySpace.isDown) {
      this.scene.start('World');
    }
  }
}
