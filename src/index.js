import Phaser from 'phaser';
import './style/style.css'
import config from './config/config';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './scenes/TitleScene';
import WorldScene from './scenes/WorldScene';
import CreditScene from './scenes/CreditScene'
import BattleScene from './scenes/BattleScene'
import GameOvereScene from './scenes/GameOverScene'
import IntroScene from './scenes/IntroScene'
import InputScene from './scenes/InputScene'


class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Intro', IntroScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('World', WorldScene);
    this.scene.add('World', CreditScene);
    this.scene.add('World', BattleScene);
    this.scene.add('Input', InputScene);
    this.scene.add('GameOver', GameOvereScene);
    this.scene.start('Boot');
  }
}

const game = new Game();
