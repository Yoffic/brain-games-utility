import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const welcome = () => console.log('Welcome to the Brain Games!');
let userName = '';
export const sayHello = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};
export const generateRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

const makeGame = (rule, gameValues) => {
  welcome();
  console.log(rule);
  sayHello();
  const askQuestion = (round) => {
    if (round > 3) {
      return console.log(`Congratulations, ${userName}!`);
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
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  };
  return askQuestion(1);
};

export default makeGame;
