/* eslint no-undef: 0 */

import PreloaderScene from '../scenes/PreloaderScene';

test('preloaderScene should be a subclass of Phaser.Scene', () => {
  expect(PreloaderScene.prototype).toBeInstanceOf(Phaser.Scene);
});
