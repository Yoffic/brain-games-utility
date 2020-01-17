import { generateRandomNumber } from '../utils';
import makeGame from '..';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (value) => value % 2 === 0;

const makeRound = () => {
  const question = generateRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => makeGame(rule, makeRound);
