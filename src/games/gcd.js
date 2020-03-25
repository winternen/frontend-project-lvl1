import gameEngine from '../index.js';
import getRandomNumber from '../math.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (a, b) => {
  const maxInt = Math.max(a, b);
  const minInt = Math.min(a, b);
  if (maxInt % minInt === 0) return minInt;
  return getGreatestCommonDivisor(minInt, maxInt % minInt);
};

const generateGame = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGreatestCommonDivisor(firstNumber, secondNumber));
  return [question, correctAnswer];
};

const startGame = () => gameEngine(generateGame, description);
export default startGame;
