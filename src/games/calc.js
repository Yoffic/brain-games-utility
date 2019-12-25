import generateRandomNumber from '../utils';
import makeGame from '..';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const makeCalc = (value1, value2, operator) => {
  switch (operator) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    default:
      return null;
  }
};
const makeRound = () => {
  const value1 = generateRandomNumber(1, 25);
  const value2 = generateRandomNumber(1, 10);
  const operator = operators[generateRandomNumber(0, operators.length - 1)];
  const question = `${value1} ${operator} ${value2}`;
  const correctAnswer = makeCalc(value1, value2, operator).toString();
  return [question, correctAnswer];
};

export default () => makeGame(rule, makeRound);
