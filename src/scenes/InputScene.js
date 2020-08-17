import Phaser from 'phaser';
import { addScore } from '../objects/scoreBoard'

export default class InputScene extends Phaser.Scene {
  constructor() {
    super('Input');
  }

  create() {
    this.add.text(300, 70, 'Welcome!', { fontSize: 50, fill: '#fff' });
    this.add.text(230, 190, 'Let\'s get your name... ', { fontSize: 30, fill: '#fff' });

    const div = document.createElement('div');
    div.setAttribute('id', 'div');
    div.innerHTML = "<input type='text' id='input' placeholder='Enter Name...' required/></br><button type='submit' id = 'button'> Submit</button>";
    this.add.dom(350, 250, div);
  
   }
}
