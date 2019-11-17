import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utils';
import makeGame from '..';

const rule = 'What number is missing in the progression?';
const progressLength = 10;
const lastIndex = progressLength - 1;
const createProgression = (startValue, step, progressionLength) => {
  let result = '';
  for (let index = 0; index < progressionLength; index += 1) {
    result = `${result} ${startValue + step * index}`;
  }
  return result;
};
const hideValue = (progression, hiddenValue) => {
  const indexOfHiddenValue = progression.indexOf(hiddenValue);
  const indexAfterHiddenValue = indexOfHiddenValue + hiddenValue.toString().length;
  const firstProgressionPart = progression.substring(0, indexOfHiddenValue);
  const lastProgressionPart = progression.substring(indexAfterHiddenValue, progression.length);
  return `${firstProgressionPart}..${lastProgressionPart}`;
};

const createGameValues = () => {
  const hiddenValueIndex = generateRandomNumber(0, lastIndex);
  const startValue = generateRandomNumber(1, 100);
  const step = generateRandomNumber(1, 30);
  const hiddenValue = startValue + step * hiddenValueIndex;
  const progression = createProgression(startValue, step, progressLength);
  const gameQuestion = hideValue(progression, hiddenValue);
  const correctAnswer = hiddenValue.toString();
  return cons(gameQuestion, correctAnswer);
};

export default () => makeGame(rule, createGameValues);
