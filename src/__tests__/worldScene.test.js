/* eslint no-undef: 0 */
import WorldScene from '../scenes/WorldScene';

test('WorldScene should be a subclass of Phaser.Scene', () => {
  expect(WorldScene.prototype).toBeInstanceOf(Phaser.Scene);
});
