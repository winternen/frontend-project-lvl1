import gameEngine from '../index.js';
import { getRandomNumber, getRandomOperator } from '../tools/numbers.js';

const description = 'What is the result of the expression?';

const setGameMode = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const operator = getRandomOperator();
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  let correctAnswer = 0;
  switch (operator) {
    case '*':
      correctAnswer = String(firstNumber * secondNumber);
      break;
    case '+':
      correctAnswer = String(firstNumber + secondNumber);
      break;
    case '-':
      correctAnswer = String(firstNumber - secondNumber);
      break;
    default:
      return null;
  }
  return [question, correctAnswer];
};

const brainCalc = () => gameEngine(setGameMode, description);

export default brainCalc;
