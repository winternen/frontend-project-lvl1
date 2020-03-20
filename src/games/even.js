import gameEngine from '../index.js';
import { getRandomNumber, isEvenNumber } from '../tools/mathematics.js';

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no"';

  const setGameMode = () => {
    const question = getRandomNumber(1, 50);
    const correctAnswer = isEvenNumber(question);

    return [question, correctAnswer];
  };

  return gameEngine(setGameMode, description);
};
