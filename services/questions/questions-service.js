const questions = require('./questions.json')

const findAllQuestions = () => {
  return questions;
};

const findQuestionsForQuiz = (qzid) => {
  return questions.filter((question) => {
    return question.quizId === qzid;
  })
};

const findQuestionById = (questionId) => {
  return questions.find((question) => {
    return question._id === questionId;
  })
};

// TODO: MongoDB Assignment next week
const createQuestion = () => {};
const updateQuestion = () => {};
const deleteQuestion = () => {};

module.exports = {
  createQuestion, findQuestionsForQuiz,
  findAllQuestions, findQuestionById,
  updateQuestion, deleteQuestion
};