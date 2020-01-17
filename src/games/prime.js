import { generateRandomNumber } from '../utils';
import makeGame from '..';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (value) => {
  if (value % 2 === 0 || value < 2) {
    return false;
  }

  let divider = 1;
  const upperBorder = Math.sqrt(value);

  for (let i = 3; i < upperBorder; i += 2) {
    divider = value % i === 0 ? i : divider;
  }

  return divider === 1;
};

const makeRound = () => {
  const question = generateRandomNumber(1, 1000);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => makeGame(rule, makeRound);
