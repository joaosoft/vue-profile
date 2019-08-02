import { ApiService } from './api.service'

const AclService = {
  init() {
    ApiService.init()
  },
  checkAcl (domainKey, roleKey, resourceTypeKey, method, endpoint, user) {
    return ApiService
        .query(`/acl/domains/${domainKey}/roles/${roleKey}/resources/types/${resourceTypeKey}`, { params: {'method': method, 'endpoint': endpoint, 'user': user,} })
  },
}

export default AclService