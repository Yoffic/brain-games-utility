import { cons } from '@hexlet/pairs';
import makeGame, { generateRandomNumber } from '../index';

const rule = 'What is the result of the expression?\n';
const operands = '+-*';
const makeCalc = (number1, number2, operand) => {
  let result = '';
  switch (operand) {
    case '+':
      result = `${number1 + number2}`;
      break;
    case '-':
      result = `${number1 - number2}`;
      break;
    case '*':
      result = `${number1 * number2}`;
      break;
    default:
      return null;
  }
  return result;
};
const createGameValues = () => {
  const number1 = generateRandomNumber(1, 25);
  const number2 = generateRandomNumber(1, 10);
  const operandIndex = generateRandomNumber(0, operands.length - 1);
  const operand = operands[operandIndex];
  const gameQuestion = `${number1} ${operand} ${number2}`;
  const correctAnswer = makeCalc(number1, number2, operand);
  return cons(gameQuestion, correctAnswer);
};

export default () => makeGame(rule, createGameValues);
