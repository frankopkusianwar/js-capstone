/* eslint no-undef: 0 */
import BootScene from '../scenes/BootScene';

test('BootScene should be a subclass of Phaser.Scene', () => {
  expect(BootScene.prototype).toBeInstanceOf(Phaser.Scene);
});
