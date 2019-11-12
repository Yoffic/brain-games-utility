import { cons } from '@hexlet/pairs';
import makeGame, { generateRandomNumber } from '../index';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (value) => {
  if (value % 2 === 0) {
    return false;
  }
  let divider = 1;
  const upperBorder = Math.sqrt(value);
  for (let i = 3; i < upperBorder; i += 2) {
    divider = value % i === 0 ? i : divider;
  }
  return divider === 1;
};
const createGameValues = () => {
  const gameQuestion = generateRandomNumber(1, 1000);
  const correctAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return cons(gameQuestion, correctAnswer);
};

export default () => makeGame(rule, createGameValues);
