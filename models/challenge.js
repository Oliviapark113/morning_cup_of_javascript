const mongoose = require("mongoose")
const Schema = mongoose.Schema

const challengesSchema = new Schema({
    title: {
      type: String
    },
    starterCode: {
      type: String
    },
    question: {
      type: String
    },
    answer: {
      type: String
    },
    difficulty: {
      type: Number
    }
})

const Challenge = mongoose.model("Challenge", challengesSchema)

module.exports = Challenge