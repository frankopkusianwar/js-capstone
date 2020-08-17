import 'phaser';
import Button from '../objects/buttons';
import config from '../config/config';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');

  }

  create() {
    
    this.overText = this.add.text(this.game.config.width * 0.5, 128, 'GAME OVER', {
      fontSize: 50,
      align: 'center',
      color: '#ffffff',
    });
    this.overText.setOrigin(0.5);

    this.overText.setOrigin(0.5);

    this.gameButton = new Button(
      this,
      config.width / 2,
      config.height - 200,
      'start_button1',
      'start_button2',
      'Play Again',
      'World',
    );

  }
}
