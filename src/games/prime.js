import { cons } from '@hexlet/pairs';
import makeGame, { generateRandomNumber } from '../index';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';
const isPrime = (num) => {
  if (num % 2 === 0) {
    return false;
  }
  let divider = 1;
  const upperBorder = Math.sqrt(num);
  for (let i = 3; i < upperBorder; i += 2) {
    divider = num % i === 0 ? i : divider;
  }
  return divider === 1;
};
const createGameValues = () => {
  const currentValue = generateRandomNumber(1000);
  const correctAnswer = isPrime(currentValue) ? 'yes' : 'no';
  return cons(currentValue, correctAnswer);
};

export default () => makeGame(rule, createGameValues);
