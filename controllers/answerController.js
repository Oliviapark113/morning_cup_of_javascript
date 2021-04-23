const db = require('../models')

module.exports = {
  saveAnswer: function(req, res) {
    db.Answer.create(req.body)
    .then(data => res.json(data))
    .catch(err => {
      console.log(err)
      res.status(500).send()})   
  },
  getAnswers: function(req, res) {
    db.Answer.find({})
    .then(data => res.json(data))
    .catch(err => {
      console.log(err)
      res.status(500).send()})       
  },
  getAnswer: function(req, res) {
    const {id } = req.params
    db.Answer.findById(id)
    .then(data => res.json(data))
    .catch(err => res.status(500).send())       
  },
  updateAnswer: function(req, res) {
    const {id} = req.params
    db.Answer.findByIdAndUpdate(id, req.body, {new: true})
    .then(answerData => {res.json(answerData)})
    .catch(err =>{
      console.log(err)
      res.status(500).send()})
  },
  deleteAnswer: function(req, res) {
    const {id } = req.params
    db.Answer.findByIdAndDelete(id)
    .then(data => res.json(data))
    .catch(err => res.status(500).send())
  }
}
