import readlineSync from 'readline-sync';

const gameEngine = (setGameMode, description) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(description);
  for (let i = 0; i < 3;) {
    const [question, correctAnswer] = setGameMode();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer?: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${playerName}!`);
    }
  }
  return console.log(`Congratulations, ${playerName}!`);
};

export default gameEngine;
