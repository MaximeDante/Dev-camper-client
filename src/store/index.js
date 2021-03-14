import Vue from "vue";
import Vuex from "vuex";

import modal from "./modal";
import auth from "./auth";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
        modal,
		auth,
	},
	plugins: [createPersistedState()],
});
