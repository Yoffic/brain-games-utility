import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utils';
import makeGame from '..';

const rule = 'What is the result of the expression?';
const operands = '+-*';
const makeCalc = (firstValue, secondValue, operand) => {
  switch (operand) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '*':
      return firstValue * secondValue;
    default:
      return null;
  }
};
const createGameValues = () => {
  const firstValue = generateRandomNumber(1, 25);
  const secondValue = generateRandomNumber(1, 10);
  const operandIndex = generateRandomNumber(0, operands.length - 1);
  const operand = operands[operandIndex];
  const gameQuestion = `${firstValue} ${operand} ${secondValue}`;
  const correctAnswer = makeCalc(firstValue, secondValue, operand).toString();
  return cons(gameQuestion, correctAnswer);
};

export default () => makeGame(rule, createGameValues);
