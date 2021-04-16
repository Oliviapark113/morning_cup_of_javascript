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
  getSavedChallenges: function() {
    return axios.get("/api/savedchallenges")
  },
  addSavedChallenge: function(data) {
    return axios.post("/api/savedchallenges", data)
  },
  getSavedChallenge: function(id) {
    return axios.get("/api/savedchallenges/" + id)
  },
  deleteSavedChallenge: function(id) {
    return axios.delete("/api/savedchallenges/" + id)
  }
}