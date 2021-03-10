import Vue from 'vue'
import VueRouter from 'vue-router'
import BootcampsLayout from '@/layouts/Bootcamps'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        default: true,
    },
    {
        path: '/bootcamps',
        name: 'bootcamps',
        component: BootcampsLayout,
        children: [
            {
                name: 'listing',
                path: '/',
                component: () => import('@/views/bootcamp/Index.vue'),
            },
            {
                name: 'bootcamp.details',
                path: '/:bootcampId',
                component: () => import('@/views/bootcamp/Details.vue'),
            }
        ]
    },
    {
        path: '*',
        redirect: {name: '404'},
    }
]


Vue.router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default Vue.router