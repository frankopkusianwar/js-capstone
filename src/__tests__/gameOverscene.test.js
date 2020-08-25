import GameOverScene from '../scenes/GameOverScene';

test('gameOverScene should be a subclass of Phaser.Scene', () => {
  expect(GameOverScene.prototype).toBeInstanceOf(Phaser.Scene);
});
