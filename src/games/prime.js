import gameEngine from '../index.js';
import { getRandomNumber, isPrimeNumber } from '../tools/numbers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const setGameMode = () => {
  const question = getRandomNumber(1, 500);
  const correctAnswer = isPrimeNumber(question);
  return [question, correctAnswer];
};

const brainPrime = () => gameEngine(setGameMode, description);

export default brainPrime;
