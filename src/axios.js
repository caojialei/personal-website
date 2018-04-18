import axios from 'axios'

export default {
  get (url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param
      }).then(res => {
        resolve(res.data)
      })
    })
  },
  post (url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: param
      }).then(res => {
        resolve(res.data)
      })
    })
  }
}
