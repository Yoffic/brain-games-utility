import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utils';
import makeGame from '..';

const rule = 'What is the result of the expression?';
const operators = '+-*';
const makeCalc = (firstValue, secondValue, operator) => {
  switch (operator) {
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
const makeRound = () => {
  const firstValue = generateRandomNumber(1, 25);
  const secondValue = generateRandomNumber(1, 10);
  const operator = operators[generateRandomNumber(0, operators.length - 1)];
  const gameQuestion = `${firstValue} ${operator} ${secondValue}`;
  const correctAnswer = makeCalc(firstValue, secondValue, operator).toString();
  return cons(gameQuestion, correctAnswer);
};

export default () => makeGame(rule, makeRound);
