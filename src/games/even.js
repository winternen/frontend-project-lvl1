import gameEngine from '../index.js';
import { getRandomNumber, isEvenNumber } from '../tools/numbers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const setGameMode = () => {
  const question = getRandomNumber(1, 50);
  const correctAnswer = isEvenNumber(question);
  return [question, correctAnswer];
};

const brainEven = () => gameEngine(setGameMode, description);

export default brainEven;
