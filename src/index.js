import readlineSync from 'readline-sync';

const gameEngine = (generateGame, description) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(description);

  const maxRound = 3;
  const firstRound = 0;

  const playRound = (round) => {
    if (round === maxRound) {
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
    playRound(round + 1);
  };
  playRound(firstRound);
};

export default gameEngine;
