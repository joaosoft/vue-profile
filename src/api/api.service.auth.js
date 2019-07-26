import Vue from 'vue'
import { ApiService } from './api.service'
import { API_URL_AUTH } from '@/api/config'

const AuthService = {
  init() {
    ApiService.init()
    Vue.axios.defaults.baseURL = API_URL_AUTH
  },
  getToken () {
    return ApiService
        .query('p/get-token')
  },
  refreshToken () {
    return ApiService
        .query('p/refresh-token')
  },
  signUp (user) {
    return ApiService
        .post('p/sign-up', user)
  },
  deactivateUser (idUser) {
    return ApiService
        .put(`users/${idUser}/deactivate`)
  },
}

export default AuthService