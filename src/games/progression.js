import { cons } from '@hexlet/pairs';
import makeGame, { generateRandomNumber } from '../index';

const rule = 'What number is missing in the progression?\n';
let hiddenNumber = 0;
const createProgression = (hiddenPosition) => {
  let currentProgressionNumber = generateRandomNumber(100);
  let progression = `${currentProgressionNumber}`;
  if (hiddenPosition === 1) {
    progression = '..';
  } else {
    for (let i = 1; i < hiddenPosition - 1; i += 1) {
      currentProgressionNumber += 2;
      progression = `${progression} ${currentProgressionNumber}`;
    }
    progression = `${progression} ..`;
    currentProgressionNumber += 2;
  }
  hiddenNumber = currentProgressionNumber;
  for (let i = hiddenPosition; i < 10; i += 1) {
    currentProgressionNumber += 2;
    progression = `${progression} ${currentProgressionNumber}`;
  }
  return progression;
};

const createGameValues = () => {
  const positionOfHiddenNumber = generateRandomNumber(10);
  const gameValues = createProgression(positionOfHiddenNumber);
  const correctAnswer = hiddenNumber.toString();
  return cons(gameValues, correctAnswer);
};

export default () => makeGame(rule, createGameValues);
