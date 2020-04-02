import gameEngine from '../index.js';
import getRandomNumber from '../math.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstNumber, step, length) => {
  const progression = [];
  const iter = (counter, number) => {
    if (counter === length) return;
    progression.push(number);
    iter(counter + 1, number + step);
  };
  iter(0, firstNumber);
  return progression;
};

const generateGame = () => {
  const startNumber = getRandomNumber(1, 50);
  const stepCount = getRandomNumber(1, 50);
  const length = 10;

  const progression = getProgression(startNumber, stepCount, length);
  const hiddenPosition = getRandomNumber(0, progression.length - 1);
  const hiddenValue = '..';

  const correctAnswer = progression[hiddenPosition];
  progression[hiddenPosition] = hiddenValue;
  const question = progression.join(' + ');

  return [question, correctAnswer];
};

export default () => gameEngine(generateGame, description);
