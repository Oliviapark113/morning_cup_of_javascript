import axios from 'axios'

export default {
    saveComment: function (data) {
        return axios.post('/api/insp/comments', data)
    },
    getComments: function () {
        return axios.get('/api/insp/comments')
    },
    getComment: function (id) {
        return axios.get('/api/insp/comments/' + id)
    },
    updateComment: function (id, data) {
        return axios.put('/api/insp/comments/' + id, data)
    },
    deleteComment: function (id) {
        return axios.delete('/api/insp/comments/' + id)
    }
}