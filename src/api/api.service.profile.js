import { ApiService } from './api.service'

const ProfileService = {
  init() {
      ApiService.init()
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