const mongoose = require("mongoose")
const Schema = mongoose.Schema

const savedChallengesSchema = new Schema({
    // username: {
    //   type: String,
    //   require: true
    // },
    challenges: [
      {
          type: Schema.Types.ObjectId,
          ref: "Challenge"
      }
    ]
})

const SavedChallenge = mongoose.model("SavedChallenge", savedChallengesSchema)

module.exports = SavedChallenge