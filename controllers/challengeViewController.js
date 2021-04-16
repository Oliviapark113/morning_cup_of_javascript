const db = require('../models')

module.exports = {
  addChallengeView: function(req, res) {
    db.SavedChallenge.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(500).send())       
  },
  getChallengeView: function(req, res) {
    const {id } = req.params
    db.SavedChallenge.findById(id)
    .then(data => res.json(data))
    .catch(err => res.status(500).send())       
  },
  getChallengeViews: function(req, res) {
    db.SavedChallenge.find({})
    .then(data => res.json(data))
    .catch(err => res.status(500).send())       
  },
  deleteChallengeView: function(req, res) {
    const {id } = req.params
    db.SavedChallenge.findByIdAndDelete(id)
    .then(data => res.json(data))
    .catch(err => res.status(500).send())
  }
}