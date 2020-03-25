import gameEngine from '../index.js';
import getRandomNumber from '../math.js';

const description = 'What number is missing in the progression?';

const getProgression = (begin, step, length) => {
  const numbers = [];
  const iter = (counter, num) => {
    if (counter === length) return;
    numbers.push(num);
    iter(counter + 1, num + step);
  };
  iter(0, begin);
  const progressionList = numbers.join(' + ');
  return progressionList;
};

const generateGame = () => {
  const startNumber = getRandomNumber(1, 50);
  const stepCount = getRandomNumber(1, 50);
  const length = 10;

  const listOfProgression = getProgression(startNumber, stepCount, length);
  const numbersColl = listOfProgression.split(' + ');
  const hiddenPosition = getRandomNumber(0, numbersColl.length - 1);
  const hiddenChar = '..';

  const temp = numbersColl[hiddenPosition];
  numbersColl[hiddenPosition] = hiddenChar;

  const question = numbersColl.join(' + ');
  const correctAnswer = temp;

  return [question, correctAnswer];
};

export default () => gameEngine(generateGame, description);
