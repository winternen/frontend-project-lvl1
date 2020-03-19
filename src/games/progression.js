import gameEngine from '../index.js';
import { getRandomNumber, getProgression } from '../tools/numbers.js';

const description = 'What number is missing in the progression?';

const setGameMode = () => {
  const startNumber = getRandomNumber(1, 50);
  const steps = getRandomNumber(1, 50);
  const maxSize = 10;
  const listOfProgression = getProgression(startNumber, steps, maxSize);
  const listToArray = listOfProgression.split(' + ');
  const hiddenPosition = getRandomNumber(0, listToArray.length - 1);
  const correctAnswer = listToArray[hiddenPosition];
  listToArray[hiddenPosition] = '..';
  const question = listToArray.join(' + ');
  return [question, correctAnswer];
};

const brainProgression = () => gameEngine(setGameMode, description);

export default brainProgression;
