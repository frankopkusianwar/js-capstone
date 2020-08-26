import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  backgroundColor: '#000111',
  parent: 'phaser-container',
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  plugins: {
    scene: [{
      key: 'rexUI',
      mapping: 'rexUI',
    },
    ],
  },
  pixelArt: true,
  roundPixels: true,
};
