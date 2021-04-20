const mongoose = require("mongoose")
const Schema = mongoose.Schema

const answerSchema = new Schema({

    name:{
      type: String
    }, 

    rank:{
      type: Number
    },

    challengeId: {
      type: String
    },

    description:{
      type: String
    },

    url:{
      type: String
    },
    
    answer: {
      type: String
    },
    userId: {
      type: String
    }
})
console.log(Schema.DataTypes)

const Answer = mongoose.model("Answer", answerSchema)

module.exports = Answer