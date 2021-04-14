const mongoose = require("mongoose");
const db = require('../models')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/challenges");

const challengesSeed = [
  {
    title: "Easy Problem",
    question: "Write a function that takes in a string and outputs the number of vowels (not counting y).",
    answer: "I don't know",
    difficulty: "1"
  }
]

const runSeeder = async () => {
  try {
    // write code here to seed DB
    // Insert Drawings
    // Add Drawing ObjectIds to User's drawings array
  } catch(err) {
    throw new err
  }
  process.exit()
}

runSeeder()