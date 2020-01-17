import { generateRandomNumber } from '../utils';
import makeGame from '..';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (value1, value2) => (
  (value1 % value2) ? getGcd(value2, value1 % value2) : Math.abs(value2)
);

const makeRound = () => {
  const value1 = generateRandomNumber(1, 100);
  const value2 = generateRandomNumber(1, 100);
  const question = `${value1} ${value2}`;
  const answer = getGcd(value1, value2).toString();
  return { question, answer };
};

export default () => makeGame(rule, makeRound);
