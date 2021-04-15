const mongoose = require("mongoose");
const db = require('../models')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/challengesdb");

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

const runSeeder = async () => {
  try {
    await db.Challenge.remove({})
    await db.Challenge.insertMany(challengesSeed, { raw: true })
  } catch(err) {
    throw new err
  }
  process.exit()
}

runSeeder()