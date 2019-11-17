import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundQuantity = 3;
const makeGame = (rule, getGameValues) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const makeGameRound = (round) => {
    if (round > roundQuantity) {
      console.log(`Congratulations, ${userName}!`);
      return null;
    }
    const currentGameValues = getGameValues();
    const questionValue = car(currentGameValues);
    const correctAnswer = cdr(currentGameValues);
    console.log(`Question: ${questionValue}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      return makeGameRound(round + 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    return null;
  };
  makeGameRound(1);
};

export default makeGame;
