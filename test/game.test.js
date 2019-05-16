const Game = require('../game')

let game = new Game();

test('if the score is 0, show the point as love', () => {
  expect(game.showScore(0)).toBe("love");
});

test('if the score is 1, show the point as fifteen', () => {
  expect(game.showScore(1)).toBe("fifteen");
});

test('if the score is 2, show the point as thirty', () => {
  expect(game.showScore(2)).toBe("thirty");
});

test('if the score is 3, show the point as forty', () => {
  expect(game.showScore(3)).toBe("forty");
});

test('show game\'s points', () => {
  expect(game.showPoints()).toBe("0 - 0");
});

test('player 1 wins a ball', () => {
  game.player1GetAPoint();
  expect(game.showPoints()).toBe("1 - 0");
});

test('show player 1 wins when the point is 4 - 0', () => {
  game.player1GetAPoint();
  game.player1GetAPoint();
  game.player1GetAPoint();
  expect(game.showPoints()).toBe("4 - 0");
  expect(game.showScores()).toBe("player 1 wins");
});

test('show 0 - 0 when it is a new set', () => {
  game.newSet();
  expect(game.showPoints()).toBe("0 - 0");
});

test('player 2 wins a ball', () => {
  game.player2GetAPoint();
  expect(game.showPoints()).toBe("0 - 1");
});

test('show forty - fifteen when the point is 3 - 1', () => {
  game.player1GetAPoint();
  game.player1GetAPoint();
  game.player1GetAPoint();
  expect(game.showScores()).toBe("forty - fifteen");
});

test('show deduce when the point is 3 - 3', () => {
  game.player2GetAPoint();
  game.player2GetAPoint();
  expect(game.showPoints()).toBe("3 - 3");
  expect(game.showScores()).toBe("deduce");
});

test('show advantage player 1 when the player 1 wins a ball after deduce', () => {
  game.player1GetAPoint();
  expect(game.showScores()).toBe("advantage player 1");
});

test('show advantage player 2 when the player 2 wins a ball after deduce', () => {
  game.player2GetAPoint();
  game.player2GetAPoint();
  expect(game.showScores()).toBe("advantage player 2");
});

test('show player 2 wins when the player 2 wins a ball after advantage', () => {
  game.player2GetAPoint();
  expect(game.showScores()).toBe("player 2 wins");
});
