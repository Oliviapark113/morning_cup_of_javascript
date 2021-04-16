import axios from 'axios'

export default {
  getChallenges: function() {
    return axios.get("/api/challenges")
  },

  saveChallenges: function(data) {
    return axios.post("/api/challenges")
  },

  getChallenge: function(id) {
    return axios.get("/api/challenges/" + id)
  },
  getchallengeView: function() {
    return axios.get("/api/challengeview")
  },
  addChallengeView: function(data) {
    return axios.post("/api/challengeview", data)
  },
  getSavedChallenge: function(id) {
    return axios.get("/api/challengeview/" + id)
  },
  deleteSavedChallenge: function(id) {
    return axios.delete("/api/challengeview/" + id)
  }
}