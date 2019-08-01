import { ApiService } from './api.service'

const ProfileService = {
  init() {
    ApiService.init()
  },
  sections () {
    return ApiService
        .query('/profile/sections')
  },
  sectionsContents () {
    return ApiService
        .query('/profile/sections/contents')
  },
  section (sectionKey) {
    return ApiService
        .query(`/profile/sections/${sectionKey}`)
  },
  contents (sectionKey) {
    return ApiService
      .query(`/profile/sections/${sectionKey}/contents`)
  },
}

export default ProfileService