import Phaser from 'phaser';
import { getScores } from '../objects/scoreBoard';
import Button from '../objects/buttons';

export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  create() {
    this.add.image(400, 300, 'background');

    getScores().then((data) => {

      this.add.text(195, 50, 'RANK      NAME                 SCORE');

      let padding = 40;
      for (let i = 0; i < this.size; i += 1) {
        this.add.text(210, 50 + padding, (i + 1));
        this.add.text(290, 50 + padding, 'frank');
        this.add.text(500, 50 + padding, '100');

        padding += 40;
      }
    });

    this.menuButton = new Button(this, 450, 500, 'menu_button1', 'menu_button2', 'Menu', 'Title');
    
  }
}
