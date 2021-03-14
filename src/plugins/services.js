import Vue from 'vue'
import AuthService from '@/services/auth/AuthService'
import BootcampsService from '@/services/bootcamps/BootcampsService'
import CoursesService from '@/services/courses/CoursesService'

const services = {
    authService: new AuthService(Vue.axios),
    BootcampsService : new BootcampsService(Vue.axios),
    coursesService : new CoursesService(Vue.axios)

}


Vue.prototype.$services = services;