/* eslint no-undef: 0 */
import InputScene from '../scenes/InputScene';

test('inputScene should be a subclass of Phaser.Scene', () => {
  expect(InputScene.prototype).toBeInstanceOf(Phaser.Scene);
});
