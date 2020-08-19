import 'phaser';
import Button from '../objects/buttons';
import config from '../config/config';
import { addScore } from '../objects/scoreBoard';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    localStorage;
    this.add.image(400, 300, 'background');
    addScore(JSON.parse(localStorage.getItem('name')), JSON.parse(localStorage.getItem('score')));

    this.overText = this.add.text(this.game.config.width * 0.5, 128, 'GAME OVER', {
      fontSize: 50,
      align: 'center',
      color: '#ffffff',
    });
    this.overText.setOrigin(0.5);

    this.overText = this.add.text(
      this.game.config.width * 0.5,
      200,
      `Your score is: ${JSON.parse(localStorage.getItem('score'))}`,
      {
        fontSize: 30,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center',
      },
    );
    this.overText.setOrigin(0.5);

    this.gameButton = new Button(this, config.width / 2, config.height - 200, 'start_button1', 'start_button2', 'Play Again', 'World');

    this.menuButton = new Button(this, config.width / 2, config.height - 300, 'menu_button1', 'menu_button2', 'Menu', 'Title');
    this.itnitSore = 0;
    localStorage.setItem('score', this.itnitSore);
  }
}
