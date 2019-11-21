import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utils';
import makeGame from '..';

const rule = 'Find the greatest common divisor of given numbers.';
const getGreatestCommonDivider = (value1, value2) => {
  let result = 0;
  const divider = value1 > value2 ? value2 : value1;
  for (let i = 1; i <= divider; i += 1) {
    result = value1 % i === 0 && value2 % i === 0 ? i : result;
  }
  return result;
};
const makeRound = () => {
  const value1 = generateRandomNumber(1, 100);
  const value2 = generateRandomNumber(1, 100);
  const question = `${value1} ${value2}`;
  const correctAnswer = getGreatestCommonDivider(value1, value2).toString();
  return cons(question, correctAnswer);
};

export default () => makeGame(rule, makeRound);
