const generateRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

const getQuestion = (data) => data.question;
const getAnswer = (data) => data.answer;

export { 
  generateRandomNumber,
  getQuestion,
  getAnswer,
};
