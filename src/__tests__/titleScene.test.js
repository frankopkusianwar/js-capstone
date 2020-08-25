import TitleScene from '../scenes/TitleScene';

test('titleScene should be a subclass of Phaser.Scene', () => {
  expect(TitleScene.prototype).toBeInstanceOf(Phaser.Scene);
});
