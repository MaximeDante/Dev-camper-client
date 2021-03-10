<template>
	<div id="app">
		<Header/>
		<router-view></router-view>
		<Footer/>
		<SignUpModal/>
		<SignInModal/>
		<ForgotPasswordModal/>
		<PasswordResetModal/>
	</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SignInModal from '@/components/auth/SignIn'
import SignUpModal from '@/components/auth/Register'
import ForgotPasswordModal from '@/components/auth/ForgotPassword'
import PasswordResetModal from '@/components/auth/PasswordReset'
export default {
	name: "App",
	components: {
		Header,
		Footer,
		SignInModal,
		SignUpModal,
		ForgotPasswordModal,
		PasswordResetModal,
		
	},
	data(){
		return{
			array: [],
		}
	},
	mounted(){
	},
	computed: {

	},
	watch: {

	},
	methods: {
		
	},
};
</script>

<style>
#app {
	font-family: Poppins, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: #f4f9fc !important; 
	min-height: 100vh;
}
</style>