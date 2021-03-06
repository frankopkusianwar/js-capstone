import Phaser from 'phaser';

export default class InputScene extends Phaser.Scene {
  constructor() {
    super('Input');
  }

  create() {
    this.add.text(300, 70, 'Welcome!', { fontSize: 50, fill: 'white' });
    this.add.text(230, 190, 'Let\'s get your name... ', { fontSize: 30, fill: 'white' });

    const div = document.createElement('div');
    div.setAttribute('id', 'div');
    div.innerHTML = "<input type='text' id='input' placeholder='Enter Name...' required/></br><button type='submit' id = 'button'> Submit</button>";
    this.add.dom(350, 250, div);

    const input = document.querySelector('#input');
    const submitButton = document.querySelector('#button');

    submitButton.addEventListener('click', () => {
      if (input.value !== '') {
        localStorage.setItem('name', JSON.stringify(input.value));
        this.scene.start('Title');
      } else {
        this.add.text(250, 320, 'Please Fill In Username', { fontSize: 20, fill: '#fff' });
      }
    });
  }
}
