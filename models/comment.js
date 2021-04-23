const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
    body: {
        type: String,
        required: 'Comment must include text'
    },
    id: {
        type: String,
        required: true
    },
    date: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true
    }
})

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment