import { cons } from '@hexlet/pairs';
import makeGame, { generateRandomNumber } from '../index';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".\n';
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
const createGameValues = () => {
  const currentNumber = generateRandomNumber(100);
  return cons(currentNumber, isEven(currentNumber));
};

const evenGame = () => makeGame(rule, createGameValues);
export default evenGame;
