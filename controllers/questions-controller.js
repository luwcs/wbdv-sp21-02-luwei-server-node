module.exports = (app) => {

  const questionService = require("../services/questions/questions-service");

  const findAllQuestions = (req, res) => {
    questionService.findAllQuestions()
    .then((questions) => {
      res.send(questions)
    })
  };

  const findQuestionById = (req, res) => {
    const questionId = req.params['questionId'];
    questionService.findQuestionById(questionId)
    .then((question) => {
      res.send(question);
    })
  };

  const findQuestionsForQuiz = (req, res) => {
    const quizId = req.params['quizId'];
    questionService.findQuestionsForQuiz(quizId)
    .then((questions) => {
      res.send(questions)
    })
  };

  app.get("/api/questions", findAllQuestions);
  app.get('/api/questions/:questionId', findQuestionById);
  app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz);
};