import { cons } from '@hexlet/pairs';
import makeGame, { generateRandomNumber } from '../index';

const rule = 'What number is missing in the progression?\n';
const createProgression = () => {
  const positionOfHiddenNumber = generateRandomNumber(10);
  let currentProgressionNumber = generateRandomNumber(100);
  let progression = `${currentProgressionNumber}`;
  if (positionOfHiddenNumber === 1) {
    progression = '..';
  } else {
    for (let i = 1; i < positionOfHiddenNumber - 1; i += 1) {
      currentProgressionNumber += 2;
      progression = `${progression} ${currentProgressionNumber}`;
    }
    progression = `${progression} ..`;
    currentProgressionNumber += 2;
  }
  const correctAnswer = currentProgressionNumber.toString();
  for (let i = positionOfHiddenNumber; i < 10; i += 1) {
    currentProgressionNumber += 2;
    progression = `${progression} ${currentProgressionNumber}`;
  }
  return cons(progression, correctAnswer);
};

export default () => makeGame(rule, createProgression);
