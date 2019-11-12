import { cons } from '@hexlet/pairs';
import makeGame, { generateRandomNumber } from '../index';

const rule = 'Find the greatest common divisor of given numbers.';
const getGreatestCommonDivider = (value1, value2) => {
  let result = 0;
  let divider = value1;
  if (value1 > value2) {
    divider = value2;
  }
  for (let i = 1; i <= divider; i += 1) {
    result = value1 % i === 0 && value2 % i === 0 ? i : result;
  }
  return result;
};
const createGameValues = () => {
  const number1 = generateRandomNumber(1, 100);
  const number2 = generateRandomNumber(1, 100);
  const gameQuestion = `${number1} ${number2}`;
  const correctAnswer = getGreatestCommonDivider(number1, number2).toString();
  return cons(gameQuestion, correctAnswer);
};

export default () => makeGame(rule, createGameValues);
