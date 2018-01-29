import API_URL from '../constants'

import axios from 'axios'

console.log(API_URL)

export default () => {
  return axios.create({
    baseURL: API_URL
  })
}
