import readlineSync from 'readline-sync';

const gameEngine = (generateGame, description) => {
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
    const [question, correctAnswer] = generateGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer?: ');
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
    startRound(counter + 1);
  };

  startRound(0);
};

export default gameEngine;
