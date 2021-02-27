import Vue from 'vue'
import AuthService from '@/services/auth/AuthService'

const services = {
    authService: new AuthService(Vue.axios),

}


Vue.prototype.$services = services;