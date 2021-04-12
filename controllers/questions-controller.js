module.exports = (app) => {

  const questionService = require("../services/questions/questions-service");

  const findAllQuestions = (req, res) => {
    const questions = questionService.findAllQuestions();
    res.send(questions)
  };

  const findQuestionById = (req, res) => {
    const questionId = req.params['questionId'];
    const question = questionService.findQuestionById(questionId);
    res.send(question);
  };

  const findQuestionsForQuiz = (req, res) => {
    const quizId = req.params['quizId'];
    const questions = questionService.findQuestionsForQuiz(quizId);
    res.send(questions);
  };

  app.get("/api/questions", findAllQuestions);
  app.get('/api/questions/:questionId', findQuestionById);
  app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz);
};