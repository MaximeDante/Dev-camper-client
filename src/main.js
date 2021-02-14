import Vue from 'vue'
import App from './App.vue'
import router from './router'
import plugins from './plugins'


import '@/assets/styles/custom.css'
import '@fortawesome/fontawesome-free/css/all.css'


Vue.config.productionTip = false

new Vue({
  router,
  plugins,
  render: h => h(App),
}).$mount('#app')
