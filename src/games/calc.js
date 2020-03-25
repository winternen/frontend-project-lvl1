import gameEngine from '../index.js';
import getRandomNumber from '../math.js';

const description = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['*', '+', '-'];
  const length = operators.length - 1;
  return operators[getRandomNumber(0, length)];
};

const generateGame = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const randomOperator = getRandomOperator();

  const getCorrectAnswer = (operator) => {
    switch (operator) {
      case '*':
        return firstNumber * secondNumber;
      case '+':
        return firstNumber + secondNumber;
      case '-':
        return firstNumber - secondNumber;
      default:
        return null;
    }
  };

  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const correctAnswer = String(getCorrectAnswer(randomOperator));

  return [question, correctAnswer];
};

export default () => gameEngine(generateGame, description);
