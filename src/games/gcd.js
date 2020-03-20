import gameEngine from '../index.js';
import { getRandomNumber, getGreatestDivisor } from '../tools/mathematics.js';

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';

  const setGameMode = () => {
    const firstNumber = getRandomNumber(1, 50);
    const secondNumber = getRandomNumber(1, 50);

    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = String(getGreatestDivisor(firstNumber, secondNumber));
    return [question, correctAnswer];
  };

  return gameEngine(setGameMode, description);
};
