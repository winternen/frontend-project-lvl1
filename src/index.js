import readlineSync from 'readline-sync';

const gameEngine = (setGameMode, description) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(description);
  const maxRounds = 3;

  const startRound = (counter) => {
    if (counter === maxRounds) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const [question, correctAnswer] = setGameMode();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer?: ');
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
    startRound(counter + 1);
  };

  return startRound(0);
};

export default gameEngine;
