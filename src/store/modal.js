const state = {
    showSignUpModal: false,
	showSignInModal: false,
	showForgotPasswordModal: false,
	showPasswordResetModal: false,
}

const getters = {
    isShowingSignUpModal: (state) => {
        return state.showSignUpModal
    },
    isShowingSignInModal: (state) => {
		return state.showSignInModal 
	},
	isShowingForgotPasswordModal: (state) => {
		return state.showForgotPasswordModal 
	},
	isShowingPasswordResetModal: (state, ) => {
		return state.showPasswordResetModal 
	},
}

const mutations = {
    SET_HIDE_ALL_MODAL (state) {
		state.showSignUpModal = false
		state.showSignInModal = false
		state.showForgotPasswordModal = false
		state.showPasswordResetModal = false
	},
	SET_SHOW_SIGNUP_MODAL (state, visible) {
		state.showSignUpModal = visible
	},
	SET_SHOW_SIGNIN_MODAL (state, visible) {
		state.showSignInModal = visible
	},
	SET_SHOW_FORGOT_PASSWORD_MODAL (state, visible) {
		state.showForgotPasswordModal = visible
	},
	SET_SHOW_PASSWORD_RESET_MODAL (state, visible) {
		state.showPasswordResetModal = visible
	},
}

const actions = {
    changeSignUpVisibility ({ commit }, visible) {
		// Reset others
		commit('SET_HIDE_ALL_MODAL')
		console.log('In the store')

		// Set new
		commit('SET_SHOW_SIGNUP_MODAL', visible)
	},
	changeSignInVisibility ({ commit }, visible) {
		// Reset others
		commit('SET_HIDE_ALL_MODAL')
		console.log('In the store')
		// Set new
		commit('SET_SHOW_SIGNIN_MODAL', visible)
	},
	changeForgotPasswordVisibility ({ commit }, visible) {
		// Reset others
		commit('SET_HIDE_ALL_MODAL')

		// Set new
		commit('SET_SHOW_FORGOT_PASSWORD_MODAL', visible)
	},
	changePasswordResetVisibility ({ commit }, visible) {
		// Reset others
		commit('SET_HIDE_ALL_MODAL')

		// Set new
		commit('SET_SHOW_PASSWORD_RESET_MODAL', visible)
	},
}
export default {
    namespaced: true,
    getters,
    state,
    mutations,
    actions,
  }