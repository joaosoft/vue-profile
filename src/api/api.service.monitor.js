import { ApiService } from './api.service'

const MonitorService = {
  init() {
      ApiService.init()
  },
  query (params) {
    return ApiService
      .query('processes', params)
  },
  get (slug) {
    return ApiService.get('processes', slug)
  },
  create (params) {
    return ApiService.post('processes', params)
  },
  update (slug, params) {
    return ApiService.update('processes', slug, params)
  },
  delete (slug) {
    return ApiService.delete(`processes/${slug}`)
  }
}

export default MonitorService