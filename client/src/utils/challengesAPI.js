import axios from 'axios'

export default {
  saveAnswer: function(data) {
    return axios.post("/api/challengeview", data)
  },
  getAnswers: function(data) {
    return axios.get("/api/challengeview")
  },
  getAnswer: function( id) {
    return axios.get("/api/challengeview/" + id)
  },
  updateAnswer: function(id) {
    return axios.put("/api/challengeview/" + id)
  },
  deleteAnswer: function(id) {
    return axios.delete("/api/challengeview/" + id)
  }
}