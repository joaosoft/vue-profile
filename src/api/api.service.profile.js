import { ApiService } from './api.service'

const ProfileService = {
  init() {
      ApiService.init()
  },
  query (params) {
    return ApiService
      .query('sections/projects/contents', params)
  },
  get (slug) {
    return ApiService.get('sections/projects/contents', slug)
  },
}

export default ProfileService