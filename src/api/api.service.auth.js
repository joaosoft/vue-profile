import { ApiService } from './api.service'

const AuthService = {
  init() {
    ApiService.init()
  },
  getToken (user) {
    return ApiService
        .query('/auth/p/get-session', { params: user })
  },
  refreshToken () {
    return ApiService
        .query('/auth/p/refresh-session')
  },
  signUp (user) {
    return ApiService
        .post('/auth/p/sign-up', user)
  },
  deactivateUser (idUser) {
    ApiService.setHeader()
    return ApiService
        .put(`/auth/users/${idUser}/deactivate`)
  },
}

export default AuthService