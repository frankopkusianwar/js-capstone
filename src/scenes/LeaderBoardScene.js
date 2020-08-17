import Phaser from 'phaser';
import { getScores } from '../objects/scoreBoard';
import Button from '../objects/buttons';

export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  create() {
    this.cameras.main.setBackgroundColor('#000111');
    this.menuButton = new Button(this, 450, 500, 'menu_button1', 'menu_button2', 'Menu', 'Title');
    
  }
}
