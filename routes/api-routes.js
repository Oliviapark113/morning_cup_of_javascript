const router = require('express').Router()
const answerController = require('../controllers/answerController')
const commentController = require('../controllers/commentController')

router.route('/api/challengeview')
  .get(answerController.getAnswers)
  .post(answerController.saveAnswer)

router.route('/api/challengeview/:id')
  .get(answerController.getAnswer)
  .put(answerController.updateAnswer)
  .delete(answerController.deleteAnswer)

router.route('/api/insp/comments')
.post(commentController.saveComment)
.get(commentController.getComments)

router.route('/api/insp/comments/:id')
.get(commentController.getComment)
.put(commentController.updateComment)
.delete(commentController.deleteComment)

module.exports = router

