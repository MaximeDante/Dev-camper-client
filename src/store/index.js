import Vue from "vue";
import Vuex from "vuex";

import modal from "./modal";
import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
        modal,
		auth,
	},
});
