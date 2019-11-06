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
const generateRandomNumber = () => Math.floor(Math.random() * 100 + 1);
const correctAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

export const askQuestion = (round) => {
  if (round > 3) {
    return console.log(`Congratulations, ${userName}!`);
  }
  const currentNumber = generateRandomNumber();
  console.log(`Question: ${currentNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (correctAnswer(currentNumber) === userAnswer) {
    console.log('Correct!');
    return askQuestion(round + 1);
  }
  return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer(currentNumber)}'.\nLet's try again, ${userName}!`);
};
