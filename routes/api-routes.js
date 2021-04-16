const router = require('express').Router()
const challengeController = require('../controllers/challengeController')
const challengeViewController = require('../controllers/challengeViewController')

router.route('/api/challenges')
  .get(challengeController.getChallenges)
  .post(challengeController.saveChallenges)

router.route('/api/challenges/:id')
  .get(challengeController.getChallenge)


router.route('/api/challengeview')
  .get(challengeViewController.getChallengeViews)
  .post(challengeViewController.addChallengeView)

router.route('/api/challengeview/:id')
  .get(challengeViewController.getChallengeView)
  .delete(challengeViewController.deleteChallengeView)

module.exports = router