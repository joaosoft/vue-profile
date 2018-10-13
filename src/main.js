import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import router from './router/router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VModal from 'vue-js-modal'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import UUID from 'vue-uuid'

import MonitorService from '@/api/api.service.monitor'
import DateFilter from '@/api/date.filter'
import ErrorFilter from '@/api/error.filter'

Vue.use(VeeValidate)
Vue.use(VueMaterial)
Vue.use(Vuetify)
Vue.use(VModal, {
    dialog: true,
    dynamic: true,
})
Vue.use(UUID)


MonitorService.init()

Vue.filter('date', DateFilter)
Vue.filter('error', ErrorFilter)


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
