const mongoose = require("mongoose")
const Schema = mongoose.Schema

const answerSchema = new Schema({
    answer: {
      type: String
    },
    challengeId: {
      type: String
    },
    userId: {
      type: String
    }
})
console.log(Schema.DataTypes)

const Answer = mongoose.model("Answer", answerSchema)

module.exports = Answer