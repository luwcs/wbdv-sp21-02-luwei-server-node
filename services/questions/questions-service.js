const questions = require('./questions.json')

const findAllQuestions = () => {
  return questions;
};

const findQuestionsForQuiz = (qzid) => {
  return questions.filter((question) => {
    return question.quizId === qzid;
  })
};

// const findQuestionsForQuiz = async function(qzid) {
//   return questions.filter((question) => {
//     return question.quizId === qzid;
//   })
// };

const findQuestionById = (questionId) => {
  return questions.find((question) => {
    return question._id === questionId;
  })
};

// TODO: MongoDB Assignment next week
const createQuestion = () => {};
const createQuestionForQuiz = () => {};
const updateQuestion = () => {};
const deleteQuestion = () => {};

module.exports = {
  createQuestion, createQuestionForQuiz,
  findQuestionsForQuiz,
  findAllQuestions, findQuestionById,
  updateQuestion, deleteQuestion
};