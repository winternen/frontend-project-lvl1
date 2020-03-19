import gameEngine from '../index.js';
import { getRandomNumber, getGreatestDivisor } from '../tools/numbers.js';

const description = 'Find the greatest common divisor of given numbers.';

const setGameMode = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGreatestDivisor(firstNumber, secondNumber));
  return [question, correctAnswer];
};

const brainGcd = () => gameEngine(setGameMode, description);

export default brainGcd;
