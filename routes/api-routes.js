const router = require('express').Router()
const answerController = require('../controllers/answerController')

router.route('/api/challengeview')
  .get(answerController.getAnswers)
  .post(answerController.saveAnswer)

router.route('/api/challengeview/:id')
  .get(answerController.getAnswer)
  .put(answerController.updateAnswer)
  .delete(answerController.deleteAnswer)

module.exports = router