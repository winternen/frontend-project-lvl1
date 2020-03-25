import gameEngine from '../index.js';
import getRandomNumber from '../math.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEvenNumber = (num) => num % 2 === 0;

const generateGame = () => {
  const question = getRandomNumber(1, 50);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startGame = () => gameEngine(generateGame, description);
export default startGame;
