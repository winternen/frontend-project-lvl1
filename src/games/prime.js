import gameEngine from '../index.js';
import { getRandomNumber, isPrimeNumber } from '../tools/mathematics.js';

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const setGameMode = () => {
    const question = getRandomNumber(1, 500);
    const correctAnswer = isPrimeNumber(question);

    return [question, correctAnswer];
  };

  return gameEngine(setGameMode, description);
};
