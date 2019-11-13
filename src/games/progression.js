import { cons } from '@hexlet/pairs';
import makeGame, { generateRandomNumber } from '../index';

const rule = 'What number is missing in the progression?';
const createProgression = (startValue, hiddenValueIndex, step, progressLength) => {
  let result = '';
  for (let index = 0; index < progressLength; index += 1) {
    if (index === hiddenValueIndex) {
      result = `${result} ..`;
    } else {
      result = `${result} ${startValue + step * index}`;
    }
  }
  return result;
};

const createGameValues = () => {
  const progressLength = 10;
  const lastIndex = progressLength - 1;
  const hiddenValueIndex = generateRandomNumber(0, lastIndex);
  const startValue = generateRandomNumber(1, 100);
  const step = generateRandomNumber(1, 30);
  const gameQuestion = createProgression(startValue, hiddenValueIndex, step, progressLength);
  const correctAnswer = (startValue + step * hiddenValueIndex).toString();
  return cons(gameQuestion, correctAnswer);
};

export default () => makeGame(rule, createGameValues);
