import generateRandomNumber from '../utils';
import makeGame from '..';

const rule = 'What number is missing in the progression?';
const progressLength = 10;
const lastIndex = progressLength - 1;
const makeQuestion = (start, step, length, hiddenValueIndex) => {
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result = i === hiddenValueIndex ? `${result} ..` : `${result} ${start + step * i}`;
  }
  return result.trim();
};

const makeRound = () => {
  const hiddenValueIndex = generateRandomNumber(0, lastIndex);
  const start = generateRandomNumber(1, 100);
  const step = generateRandomNumber(1, 30);
  const question = makeQuestion(start, step, progressLength, hiddenValueIndex);
  const correctAnswer = (start + step * hiddenValueIndex).toString();
  return [question, correctAnswer];
};

export default () => makeGame(rule, makeRound);
