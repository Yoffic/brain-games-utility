import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utils';
import makeGame from '..';

const rule = 'Find the greatest common divisor of given numbers.';
const getGreatestCommonDivider = (firstValue, secondValue) => {
  let result = 0;
  let divider = firstValue;
  if (firstValue > secondValue) {
    divider = secondValue;
  }
  for (let i = 1; i <= divider; i += 1) {
    result = firstValue % i === 0 && secondValue % i === 0 ? i : result;
  }
  return result;
};
const createGameValues = () => {
  const firstValue = generateRandomNumber(1, 100);
  const secondValue = generateRandomNumber(1, 100);
  const gameQuestion = `${firstValue} ${secondValue}`;
  const correctAnswer = getGreatestCommonDivider(firstValue, secondValue).toString();
  return cons(gameQuestion, correctAnswer);
};

export default () => makeGame(rule, createGameValues);
