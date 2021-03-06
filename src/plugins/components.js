import Vue from 'vue';
import AppButton from '../components/UI/AppButton';


import Spinner from '../components/UI/Spinner';


import VSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

import VueParticles from 'vue-particles'


Vue.component('AppButton', AppButton)

Vue.component('Spinner', Spinner)

Vue.use(VSelect)
Vue.component('v-select', VSelect)

Vue.use(VueParticles)
