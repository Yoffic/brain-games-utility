import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');
export const instructIsEven = () => console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
let userName = '';
export const sayHello = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!
  `);
};

// Brain-even game
const firstNumber = 16;
const secondNumber = 23;
const thirdNumber = 46;

const getCurrentNumber = (round) => {
  if (round === 1) {
    return firstNumber;
  }
  if (round === 2) {
    return secondNumber;
  }
  if (round === 3) {
    return thirdNumber;
  }
  return null;
};

const correctAnswer = (currentNumber) => (currentNumber % 2 === 0 ? 'yes' : 'no');

export const askQuestion = (round) => {
  if (round > 3) {
    return console.log(`Congratulations, ${userName}!`);
  }
  const currentNumber = getCurrentNumber(round);
  console.log(`Question: ${currentNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (correctAnswer(currentNumber) === userAnswer) {
    console.log('Correct!');
    return askQuestion(round + 1);
  }
  return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer(currentNumber)}'.\nLet's try again, ${userName}!`);
};
