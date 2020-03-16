import readlineSync from 'readline-sync';
import printGreeting from '../index.js';

const getRandomNumber = (min, max) => {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const startGame = () => {
  printGreeting();
  let result = 0;
  while (result <= 3) {
    const question = getRandomNumber(1, 20);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer?: ');
    if (isEven(question) === answer) {
      console.log('Correct!');
      result += 1;
    } else {
      console.log('"yes" is wrong answer ;(. Correct answer was "no".\nLet\'s try again, Bill!');
      break;
    }
  }
  return result === 3 ? 'Congratulations, Sam!' : '';
};
export default startGame;
