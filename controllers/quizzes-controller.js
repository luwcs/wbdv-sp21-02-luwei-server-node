const quizzesService = require("../services/quizzes/quizzes-service");

module.exports = (app) => {

  const findAllQuizzes = (req, res) => {
    // const quizzes = quizzesService.findAllQuizzes();
    quizzesService.findAllQuizzes()
    .then((quizzes) => {
      res.send(quizzes)
    })
  };

  const findQuizById = (req, res) => {
    const qid = req.params['quizId'];
    quizzesService.findQuizById(qid)
    .then((quiz) => {
      res.send(quiz)
    })
  };

  app.get('/api/quizzes', findAllQuizzes);
  app.get('/api/quizzes/:quizId', findQuizById)
};