/* eslint no-undef: 0 */
import LeaderBoardScene from '../scenes/LeaderBoardScene';

test('BootScene should be a subclass of Phaser.Scene', () => {
  expect(LeaderBoardScene.prototype).toBeInstanceOf(Phaser.Scene);
});
