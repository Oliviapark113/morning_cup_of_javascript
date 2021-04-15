const db = require('../models')

module.exports = {
  getChallenge: function(req, res) {
    const {id } = req.params
    db.Challenge.findById(id)
    .then(data => res.json(data))
    .catch(err => res.status(500).send())       
  }
}