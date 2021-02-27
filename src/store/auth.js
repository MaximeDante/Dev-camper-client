import Vue from 'vue'
const state = {
	user: null,
	accessToken: null,
};

const getters = {
	isAuthenticated: (state) => {
		return state.user != null && state.accessToken != null;
	},
    loggedUser: (state) => {
        return state.user;
    }
};

const mutations = {
	SET_ACCESS_TOKEN(state, token) {
		state.accessToken = token;
	},
    SET_LOGGED_USER(state, user){
        state.user = user;
    },
	LOGOUT_USER(state){
		state.user = null;
		state.accessToken = null;
	}
};

const actions = {
	async setToken({ commit }, payload) {
        console.log(payload)
        commit("SET_ACCESS_TOKEN", payload);
        // const response = await this.$services.authService.getCurrentUser();
		// if (response && response.data) {
		// 	const responseData = responseData;
		// 	if (responseData.user) {
		// 		commit("SET_LOGGED_USER", responseData.user);
		// 	}
		// }
		// return response;
	},
	async getCurrentUser({commit}) {
		const response = await Vue.prototype.$services.authService.getCurrentUser();
		console.log('reponse', response)
		let responseData;
		if (response && response.data) {
			responseData = response.data;
			if (responseData.data) {
				responseData = responseData.data
				console.log('user', responseData)
				commit("SET_LOGGED_USER", responseData);
			}
		}
		return response;
	},
	logoutUser ({ commit }) {
		console.log('logging the user out')
		commit('SET_ACCESS_TOKEN', { token: null})
		commit('SET_LOGGED_USER', { user: null})
		commit('modal/SET_HIDE_ALL_MODAL', null, { root: true })
		commit('LOGOUT_USER')

	},
};

export default {
	namespaced: true,
	getters,
	state,
	mutations,
	actions,
};
