import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const generateRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

const makeGame = (rule, gameValues) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const askQuestion = (round) => {
    const roundQuantity = 3;
    if (round > roundQuantity) {
      return `Congratulations, ${userName}!`;
    }
    const currentGameValues = gameValues();
    const questionValue = car(currentGameValues);
    const correctAnswer = cdr(currentGameValues);
    console.log(`Question: ${questionValue}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      return askQuestion(round + 1);
    }
    return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
  };
  console.log(askQuestion(1));
};

export default makeGame;
