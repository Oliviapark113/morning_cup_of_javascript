import axios from 'axios'

export default {
  saveAnswer: function(data) {
    return axios.post("/api/challengeview", data)
  },
  getAnswers: function() {
    return axios.get("/api/challengeview")
  },
  getAnswer: function( id) {
    return axios.get("/api/challengeview/" + id)
  },
  updateAnswer: function(id, data) {
    return axios.put("/api/challengeview/"+id , data )
  },
  deleteAnswer: function(id) {
    return axios.delete("/api/challengeview/" + id)
  }
}