import Phaser from 'phaser';
import { getScores } from '../objects/scoreBoard';
import Button from '../objects/buttons';

export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  create() {
    this.cameras.main.setBackgroundColor('#000111');

    getScores().then((scores) => {
      scores.sort((a, b) => b.score - a.score);
      this.add.text(195, 50, 'RANK      NAME                 SCORE');
      this.size = scores.length < 10 ? scores.length : 10;
      let padding = 40;
      for (let i = 0; i <= 4; i += 1) {
        this.add.text(210, 50 + padding, (i + 1));
        this.add.text(290, 50 + padding, scores[i].user);
        this.add.text(500, 50 + padding, scores[i].score);

        padding += 40;
      }
    })

    this.menuButton = new Button(this, 450, 500, 'menu_button1', 'menu_button2', 'Menu', 'Title');
    
  }
}
