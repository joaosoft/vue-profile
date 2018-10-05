import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import router from './router'

Vue.use(VueResource)
Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
