const mongoose = require("mongoose");
const db = require('../models')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/morning_cup_of_javascript");

const challengesSeed = [
  {
    title: "Easy Problem 1",
    question: "Easy Problem 1 Question",
    answer: "Problem 1 answer",
    difficulty: 1
  },
  {
    title: "Easy Problem 2",
    question: "Easy Problem 2 Question",
    answer: "Problem 2 answer",
    difficulty: 1
  },
  {
    title: "Medium Problem 1",
    question: "Medium Problem 1 Question",
    answer: "Problem 3 answer",
    difficulty: 2
  },
  {
    title: "Hard Problem 1",
    question: "Hard Problem 1 Question",
    answer: "Problem 4 answer",
    difficulty: 3
  },
]

const saveChallengesSeed = {
  email: "oliviaypark113@gmail.com",
}




const runSeeder = async () => {
  try {
    //clear datas each time run .. 
    await db.SavedChallenge.remove({})
    await db.Challenge.remove({})

    const response = await db.Challenge.insertMany(challengesSeed, { raw: true })

    const challengeId = response.map(challenge => console.log(challenge))

    const saveChallengeData ={
      ...saveChallengesSeed,
      challenges : challengeId 
    }

    const savedChallenge = await db.SavedChallenge.create(saveChallengeData)

    await db.Challenge.update({}, {savedChallenge: savedChallenge._id})
  } catch(err) {
    throw new err
  }
  process.exit()
}

runSeeder()