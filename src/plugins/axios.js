import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'


axios.interceptors.request.use(
    (config) => {
    //   let token = localStorage.getItem('authtoken');
    let token = Vue.$cookies.get('token')
  
      if (token) {
        config.headers['Authorization'] = `Bearer ${ token }`;
      }
  
      return config;
    }, 
  
    (error) => {
      return Promise.reject(error);
    }
  );

  
Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = "http://localhost:5000/api/v1"

