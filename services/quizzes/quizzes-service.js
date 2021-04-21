const quizzes = require('./quizzes.json');
const quizzesModel = require("../../models/quizzes/quizzes-model");

const findAllQuizzes = () => {
  return quizzesModel.find()
};

const findQuizById = (quizId) => {
  return quizzesModel.findById(quizId)
};

// TODO: MongoDB Assignment next week
const createQuiz = () => {};
const updateQuiz = () => {};
const deleteQuiz = () => {};

module.exports = {
  createQuiz,
  findAllQuizzes, findQuizById,
  updateQuiz, deleteQuiz
};