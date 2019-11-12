import { cons } from '@hexlet/pairs';
import makeGame, { generateRandomNumber } from '../index';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const createGameValues = () => {
  const gameQuestion = generateRandomNumber(1, 100);
  const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return cons(gameQuestion, correctAnswer);
};

const evenGame = () => makeGame(rule, createGameValues);
export default evenGame;
