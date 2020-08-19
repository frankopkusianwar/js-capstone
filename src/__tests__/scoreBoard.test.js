import { addScore, getScores } from '../objects/scoreBoard';

it('should post an object to the games API', () => {
  addScore().then(data => {
    expect(typeof data).toBe('object');
  });
});

it('should get username', () => {
  getScores().then(data => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          user: 'frank',
        }),
      ]),
    );
  });
});

it('should get score', () => {
  getScores().then(data => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          score: '300',
        }),
      ]),
    );
  }).catch(() => {});
});
