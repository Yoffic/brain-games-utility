import { cons } from '@hexlet/pairs';
import makeGame, { generateRandomNumber } from '../index';

const rule = 'What number is missing in the progression?';
const progressionLength = 10;
const getHiddenNumber = (position, value) => {
  const iter = (counter, acc) => {
    if (counter === position) {
      return acc;
    }
    return iter(counter + 1, acc + 2);
  };
  return iter(1, value);
};
const createProgression = (position, value) => {
  let currentProgressionNumber = value;
  let progression = `${currentProgressionNumber}`;
  if (position === 1) {
    progression = '..';
  } else {
    for (let i = 1; i < position - 1; i += 1) {
      currentProgressionNumber += 2;
      progression = `${progression} ${currentProgressionNumber}`;
    }
    progression = `${progression} ..`;
    currentProgressionNumber += 2;
  }
  for (let i = position; i < progressionLength; i += 1) {
    currentProgressionNumber += 2;
    progression = `${progression} ${currentProgressionNumber}`;
  }
  return progression;
};

const createGameValues = () => {
  const positionOfHiddenNumber = generateRandomNumber(1, progressionLength);
  const startingValue = generateRandomNumber(1, 100);
  const gameQuestion = createProgression(positionOfHiddenNumber, startingValue);
  const correctAnswer = getHiddenNumber(positionOfHiddenNumber, startingValue).toString();
  return cons(gameQuestion, correctAnswer);
};

export default () => makeGame(rule, createGameValues);
