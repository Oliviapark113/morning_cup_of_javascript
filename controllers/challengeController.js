const db = require('../models')

module.exports = {

  getChallenges: function(req, res) {
   
    db.Challenge.find({})
    .then(data => res.json(data))
    .catch(err => res.status(500).send())       
  },

  saveChallenges: function(req, res){
      db.Challenge.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(500).send())  
  },

  getChallenge: function(req, res) {
    const {id } = req.params
    db.Challenge.findById(id)
    .then(data => res.json(data))
    .catch(err => res.status(500).send())       
  }


}