import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import router from './router/router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import  VueWindowModal from  'vue-window-modal'

import MonitorService from '@/api/api.service.monitor'
import DateFilter from '@/api/date.filter'
import ErrorFilter from '@/api/error.filter'

Vue.use(VeeValidate)
Vue.use(VueMaterial)
Vue.use(VueWindowModal)

MonitorService.init()

Vue.filter('date', DateFilter)
Vue.filter('error', ErrorFilter)


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
