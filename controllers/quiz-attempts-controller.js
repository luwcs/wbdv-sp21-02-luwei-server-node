const quizAttempDao = require('../daos/quiz-attempts-dao')

module.exports = (app) => {
  app.post('/api/quizzes/:qid/attempts', (req, res) => {
    quizAttempDao.createAttempt(req.params.qid, req.body)
    .then(attempt => res.send(attempt))
  })

  app.get('/api/quizzes/:qid/attempts', (req, res) => {
    quizAttempDao.findAttemptsForQuiz(req.params.qid)
    .then(attempts => res.send(attempts))
  })
}