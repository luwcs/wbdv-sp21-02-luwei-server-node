const questions = require('./questions.json')
const questionsModel = require("../../models/questions/questions-model")

const findAllQuestions = () => {
  return questionsModel.find();
};

const findQuestionsForQuiz = (qzid) => {
  return questionsModel.find({quizId: qzid})
};

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