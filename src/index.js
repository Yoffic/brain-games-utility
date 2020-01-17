import readlineSync from 'readline-sync';
import { getAnswer, getQuestion } from './utils';

const roundsCount = 3;
const makeGame = (rule, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}\n`);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!\n`);

  for (let i = 1; i <= roundsCount; i += 1) {
    const gameData = getGameData();
    const question = getQuestion(gameData);
    const correctAnswer = getAnswer(gameData);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default makeGame;
