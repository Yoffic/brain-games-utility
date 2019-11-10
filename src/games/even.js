import { cons } from '@hexlet/pairs';
import makeGame, { generateRandomNumber } from '../index';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".\n';
const isEven = (number) => number % 2 === 0;
const createGameValues = () => {
  const currentValue = generateRandomNumber(100);
  const correctAnswer = isEven(currentValue) ? 'yes' : 'no';
  return cons(currentValue, correctAnswer);
};

const evenGame = () => makeGame(rule, createGameValues);
export default evenGame;
