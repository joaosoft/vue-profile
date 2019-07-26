import Vue from 'vue'
import { ApiService } from './api.service'
import { API_URL_PROFILE } from '@/api/config'

const ProfileService = {
  init() {
    ApiService.init()
    Vue.axios.defaults.baseURL = API_URL_PROFILE
  },
  sections () {
    return ApiService
        .query('sections')
  },
  sectionsContents () {
    return ApiService
        .query('sections/contents')
  },
  section (sectionKey) {
    return ApiService
        .query(`sections/${sectionKey}`)
  },
  contents (sectionKey) {
    return ApiService
      .query(`sections/${sectionKey}/contents`)
  },
}

export default ProfileService