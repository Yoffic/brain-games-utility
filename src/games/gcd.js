import { cons } from '@hexlet/pairs';
import makeGame, { generateRandomNumber } from '../index';

const rule = 'Find the greatest common divisor of given numbers.\n';
const getGreatestCommonDividor = (firstNumber, secondNumber) => {
  let divider = firstNumber;
  if (firstNumber > secondNumber) {
    divider = secondNumber;
  }
  let result = 0;
  for (let i = 1; i <= divider; i += 1) {
    result = firstNumber % i === 0 && secondNumber % i === 0 ? i : result;
  }
  return result;
};
const createGameValues = () => {
  const number1 = generateRandomNumber(100);
  const number2 = generateRandomNumber(100);
  const currentValue = `${number1} ${number2}`;
  const correctAnswer = getGreatestCommonDividor(number1, number2).toString();
  return cons(currentValue, correctAnswer);
};

export default () => makeGame(rule, createGameValues);
