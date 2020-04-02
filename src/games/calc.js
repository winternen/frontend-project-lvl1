import gameEngine from '../index.js';
import getRandomNumber from '../math.js';

const description = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['*', '+', '-'];
  const lastOperatorIndex = operators.length - 1;
  return operators[getRandomNumber(0, lastOperatorIndex)];
};

const getCorrectAnswer = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '*':
      return String(firstNumber * secondNumber);
    case '+':
      return String(firstNumber + secondNumber);
    case '-':
      return String(firstNumber - secondNumber);
    default:
      return null;
  }
};

const generateGame = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const operator = getRandomOperator();

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = getCorrectAnswer(firstNumber, secondNumber, operator);

  return [question, correctAnswer];
};

export default () => gameEngine(generateGame, description);
