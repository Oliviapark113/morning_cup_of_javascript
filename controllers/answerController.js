const Answer = require('../models/answer')

module.exports = {
  saveAnswer: function(req, res) {
    Answer.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(500).send())       
  },
  getAnswers: function(req, res) {
    Answer.find({})
    .then(data => res.json(data))
    .catch(err => res.status(500).send())       
  },
  getAnswer: function(req, res) {
    const {id } = req.params
    Answer.findById(id)
    .then(data => res.json(data))
    .catch(err => res.status(500).send())       
  },
  updateAnswer: function(req, res) {
    const {id} = req.params
    db.Answer.findByIdAndUpdate(id, req.body, {new: true})
    .then(answerData => {res.json(answerData)})
    .catch(err =>res.status(500).send())
  },
  deleteAnswer: function(req, res) {
    const {id } = req.params
    Answer.findByIdAndDelete(id)
    .then(data => res.json(data))
    .catch(err => res.status(500).send())
  }
}