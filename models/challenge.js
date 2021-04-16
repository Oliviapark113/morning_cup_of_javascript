const mongoose = require("mongoose")
const Schema = mongoose.Schema

const challengesSchema = new Schema({
    name: {
      type: String
    },
    description: {
      type: String
    },
    url: {
      type: String
    },
    rank: {
      type: Number
    }
})
console.log(Schema.DataTypes)

const Challenge = mongoose.model("Challenge", challengesSchema)

module.exports = Challenge