import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'profile',
            component: () => import('@/views/Profile')
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('@/views/Projects')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/About')
        },
    ]
})
