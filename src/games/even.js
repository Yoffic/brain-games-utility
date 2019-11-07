import { cons } from '@hexlet/pairs';
import makeGame, { generateRandomNumber } from '../index';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".\n';
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
const gameValues = (round) => {
  const currentNumber = generateRandomNumber();
  if (round > 0) {
    return cons(currentNumber, isEven(currentNumber));
  }
  return null;
};

const evenGame = () => makeGame(rule, gameValues);
export default evenGame;
