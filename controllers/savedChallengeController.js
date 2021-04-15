const db = require('../models')

module.exports = {
  addSavedChallenge: function(req, res) {
    db.SavedChallenge.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(500).send())       
  },
  getSavedChallenge: function(req, res) {
    const {id } = req.params
    db.SavedChallenge.findById(id)
    .then(data => res.json(data))
    .catch(err => res.status(500).send())       
  },
  getSavedChallenges: function(req, res) {
    db.SavedChallenge.find({})
    .then(data => res.json(data))
    .catch(err => res.status(500).send())       
  },
  deleteSavedChallenge: function(req, res) {
    const {id } = req.params
    db.SavedChallenge.findByIdAndDelete(id)
    .then(data => res.json(data))
    .catch(err => res.status(500).send())
  }
}