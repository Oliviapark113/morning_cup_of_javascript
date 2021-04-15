const router = require('express').Router()
const challengeController = require('../controllers/challengeController')
const savedChallengeController = require('../controllers/savedChallengeController')

router.route('/api/challenges')
  .get(challengeController.getChallenges)

router.route('/api/challenges/:id')
  .get(challengeController.getChallenge)


router.route('/api/savedchallenges')
  .get(savedChallengeController.getSavedChallenges)
  .post(savedChallengeController.addSavedChallenge)

router.route('/api/savedchallenges/:id')
  .get(savedChallengeController.getSavedChallenge)
  .delete(savedChallengeController.deleteSavedChallenge)

module.exports = router