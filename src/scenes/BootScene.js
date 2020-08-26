/* eslint no-undef: 0 */
import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', 'src/assets/logo.svg');
  }

  create() {
    this.scene.start('Preloader');
  }
}
