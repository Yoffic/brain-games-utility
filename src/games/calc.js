import { cons } from '@hexlet/pairs';
import makeGame, { generateRandomNumber } from '../index';

const rule = 'What is the result of the expression?\n';
const operands = '+-*';
const generateRandomOperand = () => {
  const index = Math.floor(Math.random() * operands.length);
  return operands[index];
};
const makeCalc = (number1, number2, operand) => {
  if (operand === '+') {
    return (number1 + number2);
  }
  if (operand === '-') {
    return number1 - number2;
  }
  return number1 * number2;
};
const createGameValues = () => {
  const number1 = generateRandomNumber(25);
  const number2 = generateRandomNumber(10);
  const operand = generateRandomOperand();
  const currentValue = `${number1} ${operand} ${number2}`;
  const correctAnswer = makeCalc(number1, number2, operand).toString();
  return cons(currentValue, correctAnswer);
};

export default () => makeGame(rule, createGameValues);
