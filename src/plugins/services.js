import Vue from 'vue'
import AuthService from '@/services/auth/AuthService'
import BootcampsService from '@/services/bootcamps/BootcampsService'

const services = {
    authService: new AuthService(Vue.axios),
    BootcampsService : new BootcampsService(Vue.axios)

}


Vue.prototype.$services = services;