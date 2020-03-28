import gameEngine from '../index.js';
import getRandomNumber from '../math.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  const iter = (divisor) => {
    if (num === divisor) return true;
    if (num % divisor === 0) return false;
    return iter(divisor + 1);
  };
  return iter(2);
};

const generateGame = () => {
  const question = getRandomNumber(1, 500);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => gameEngine(generateGame, description);
