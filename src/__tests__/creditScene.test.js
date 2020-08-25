/* eslint no-undef: 0 */

import CreditScene from '../scenes/CreditScene';

test('creditScene should be a subclass of Phaser.Scene', () => {
  expect(CreditScene.prototype).toBeInstanceOf(Phaser.Scene);
});
