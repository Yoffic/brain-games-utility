import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;
const makeGame = (rule, getGameValues) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const makeGameRound = (round) => {
    if (round > roundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const currentGameValues = getGameValues();
    const question = car(currentGameValues);
    const correctAnswer = cdr(currentGameValues);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    makeGameRound(round + 1);
  };
  return makeGameRound(1);
};

export default makeGame;
