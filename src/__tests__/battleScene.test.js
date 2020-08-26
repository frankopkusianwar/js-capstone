/* eslint no-undef: 0 */
import Battlescene from '../scenes/BattleScene';

test('WorldScene should be a subclass of Phaser.Scene', () => {
  expect(Battlescene.prototype).toBeInstanceOf(Phaser.Scene);
});
