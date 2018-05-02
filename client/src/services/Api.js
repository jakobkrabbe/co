import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://localhot:8081/`
  })
}
