import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utils';
import makeGame from '..';

const rule = 'What number is missing in the progression?';
const progressLength = 10;
const lastIndex = progressLength - 1;
const makeQuestion = (startValue, step, progressionLength, hiddenValueIndex) => {
  let result = hiddenValueIndex === 0 ? '..' : `${startValue}`;
  for (let i = 1; i < progressionLength; i += 1) {
    result = i === hiddenValueIndex ? `${result} ..` : `${result} ${startValue + step * i}`;
  }
  return result;
};

const makeRound = () => {
  const hiddenValueIndex = generateRandomNumber(0, lastIndex);
  const startValue = generateRandomNumber(1, 100);
  const step = generateRandomNumber(1, 30);
  const hiddenValue = startValue + step * hiddenValueIndex;
  const gameQuestion = makeQuestion(startValue, step, progressLength, hiddenValueIndex);
  const correctAnswer = hiddenValue.toString();
  return cons(gameQuestion, correctAnswer);
};

export default () => makeGame(rule, makeRound);
