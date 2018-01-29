import api from './api'

export default {
  api () {
    return api().get('api')
  },
  photos () {
    return api().get('photos')
  }
}
