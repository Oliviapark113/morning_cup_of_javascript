const db = require('../models')
const date = require('date-and-time')

module.exports = {
    saveComment: function(req, res) {
        console.log(req.body)
        const now =  new Date()
        const newDate = date.format(now, 'YYYY/MM/DD HH:mm:ss')
        console.log(typeof newDate)
        db.Comment.create({...req.body, date: newDate})
        .then(data => res.json(data))
        .catch(err => {
            console.log(err)
            res.status(500).send()
        })
    },
    getComments: function(req, res) {
        db.Comment.find({})
        .sort({date: -1})
        .limit(20)
        .then(data => res.json(data))
        .catch(err => res.status(500).send())

    },
    getComment: function(req, res) {
        const {id } = req.params
        db.Comment.findById(id)
        .then(data => res.json(data))
        .catch(err => res.status(500).send())       
      },
      updateComment: function(req, res) {
        const {id} = req.params
        db.Comment.findByIdAndUpdate(id, req.body, {new: true})
        .then(commentData => {res.json(commentData)})
        .catch(err =>{
          console.log(err)
          res.status(500).send()})
      },
      deleteComment: function(req, res) {
        const {id } = req.params
        db.Comment.findByIdAndDelete(id)
        .then(data => res.json(data))
        .catch(err => res.status(500).send())
      }
}