import readlineSync from 'readline-sync';
import printGreeting from '../index.js';
import { getRandomNumber, isEvenNumber } from '../tools/numbers.js';

const startGame = () => {
  const name = printGreeting();
  for (let i = 0; i < 3;) {
    const question = getRandomNumber(1, 20);
    console.log(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${question}`);
    const answer = readlineSync.question('Your answer?: ');
    const correctAnswer = isEvenNumber(question);
    if (answer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default startGame;
