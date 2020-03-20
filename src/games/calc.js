import gameEngine from '../index.js';
import { getRandomNumber, getRandomOperator } from '../tools/mathematics.js';

export default () => {
  const description = 'What is the result of the expression?';

  const setGameMode = () => {
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

  return gameEngine(setGameMode, description);
};
