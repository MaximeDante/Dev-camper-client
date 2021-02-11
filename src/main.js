import Vue from 'vue'
import App from './App.vue'

import plugins from './plugins'


import '@/assets/styles/custom.css'
import '@fortawesome/fontawesome-free/css/all.css'


Vue.config.productionTip = false

new Vue({
  plugins,
  render: h => h(App),
}).$mount('#app')
