import Phaser from 'phaser';
import config from '../config/config';
import Button from '../objects/buttons';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.add.image(400, 300, 'background');
    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 200, 'intro_button1', 'intro_button2', 'Intro', 'Intro');
    this.startButton = new Button(this, config.width / 2, config.height / 2 - 100, 'start_button1', 'start_button2', 'Start', 'World');
    this.optionsButton = new Button(this, config.width / 2, config.height / 2, 'option_button1', 'option_button2', 'Options', 'Options');
    this.creditsButton = new Button(this, config.width / 2, config.height / 2 + 100, 'credit_button1', 'leader_button2', 'Credits', 'Credits');
    this.leaderButton = new Button(this, config.width / 2, config.height / 2 + 200, 'leader_button1', 'leader_button2', 'Leader Board', 'LeaderBoard');
  }
}
