const db = require('../models')

module.exports = {
    saveComment: function(req, res) {
        console.log(req.body)
        db.Comment.create(req.body)
        .then(data => res.json(data))
        .catch(err => {
            console.log(err)
            res.status(500).send()
        })
    },
    getComments: function(req, res) {
        db.Comment.find({})
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