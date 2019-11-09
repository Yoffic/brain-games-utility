import { cons } from '@hexlet/pairs';
import makeGame, { generateRandomNumber } from '../index';

const rule = 'What number is missing in the progression?\n';
const createProgression = () => {
  const positionOfHiddenNumber = generateRandomNumber(10);
  let progressionNumber = generateRandomNumber(100);
  let progression = `${progressionNumber}`;
  if (positionOfHiddenNumber === 1) {
    progression = '..';
  } else {
    for (let i = 1; i < positionOfHiddenNumber - 1; i += 1) {
      progressionNumber += 2;
      progression = `${progression} ${progressionNumber}`;
    }
    progression = `${progression} ..`;
    progressionNumber += 2;
  }
  const correctAnswer = progressionNumber.toString();
  for (let i = positionOfHiddenNumber; i < 10; i += 1) {
    progressionNumber += 2;
    progression = `${progression} ${progressionNumber}`;
  }
  return cons(progression, correctAnswer);
};

export default () => makeGame(rule, createProgression);
