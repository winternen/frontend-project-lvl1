import gameEngine from '../index.js';
import getRandomNumber from '../math.js';

const description = 'What number is missing in the progression?';

const getProgression = (num, steps, size) => {
  const coll = [];
  const iter = (counter, acc) => {
    if (counter === size) return acc;
    coll.push(acc);
    return iter(counter + 1, acc + steps);
  };
  iter(0, num);
  const progressionList = coll.join(' + ');
  return progressionList;
};

const generateGame = () => {
  const startNumber = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 50);
  const maxSize = 10;

  const listOfProgression = getProgression(startNumber, step, maxSize);
  const listToArray = listOfProgression.split(' + ');
  const hiddenPosition = getRandomNumber(0, listToArray.length - 1);

  const correctAnswer = listToArray[hiddenPosition];
  listToArray[hiddenPosition] = '..';
  const question = listToArray.join(' + ');

  return [question, correctAnswer];
};

const startGame = () => gameEngine(generateGame, description);
export default startGame;
