/* eslint no-unused-expressions: 0 */
/* eslint no-undef: 0 */
/* eslint func-names: 0 */
import 'phaser';
import config from '../config/config';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
    this.madeByText = this.add.text(0, 0, 'Created By: Frank Okiror', { fontSize: '26px', fill: '#fff' });
    this.madeByText1 = this.add.text(0, 0, 'Thanks to OpenGameArt.org for\n\nproviding the assets\n\nused in this game.', { fontSize: '26px', fill: '#fff' });
    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.skipText = this.add.text(10, 10, 'Press SPACE\nto skip', { fontSize: '10px', fill: '#fff' });

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.madeByText1,
      this.zone,
    );

    this.madeByText.setY(1000);
    this.madeByText1.setY(1200);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -200,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete() {
        this.destroy;
      },
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -200,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete() {
        this.destroy;
      },
    });

    this.madeByTween1 = this.tweens.add({
      targets: this.madeByText1,
      y: -200,
      duration: 8000,
      delay: 1000,
      onComplete: function () {
        this.madeByTween1.destroy;
        this.scene.start('Title');
      }.bind(this),
    });
  }

  update() {
    if (this.keySpace.isDown) {
      this.scene.start('Title');
    }
  }
}
