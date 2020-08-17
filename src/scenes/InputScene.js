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

    const input = document.querySelector('#input');
    const submitButton = document.querySelector('#button')

    submitButton.addEventListener('click', () => {
      if (input.value !== '') {
        const loading = this.add.text(350, 250, 'Loading...', { color: 'white', fontSize: '26px ' });
        addScore(input.value, localStorage.getItem('score')).then(() => {
          loading.destroy();
          this.scene.start('Title');
        })
        this.scene.start('Title');
      } else {
        this.add.text(250, 320, 'Please Fill In Username', { fontSize: 20, fill: '#fff' });
      }
    });
   }
}
