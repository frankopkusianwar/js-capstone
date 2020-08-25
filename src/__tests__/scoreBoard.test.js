import { addScore, getScores } from '../objects/scoreBoard';

it('should post an object to the games API', () => {
  addScore().then(data => {
    expect(typeof data).toBe('object');
  }).catch(() => {});
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
  }).catch(() => {});
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

it('Should return error message if only name is provided', () => {
  addScore('frank').then(data => {
    expect(data).toEqual(
      expect.objectContaining({
        message: 'You need to provide a valid score for the leaderboard',
      }),
    );
  }).catch(() => {});
});

it('Should return error message if only score is provided', () => {
  addScore('frank').then(data => {
    expect(data).toEqual(
      expect.objectContaining({
        message: 'You need to provide a valid user for the score',
      }),
    );
  }).catch(() => {});
});
