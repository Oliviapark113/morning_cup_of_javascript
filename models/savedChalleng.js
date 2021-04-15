const mongoose = require("mongoose")
const Schema = mongoose.Schema

const savedChallengesSchema = new Schema({
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

const SavedChallenge = mongoose.model("SavedChallenge", savedChallengesSchema)

module.exports = SavedChallenge