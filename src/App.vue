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
import axios from 'axios'
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
		async getData(){
			console.log('fetching data')
			const response = await axios.get('http://localhost:5000/api/v1/bootcamps');
			console.log('response', response);
			if (response && response.data){
				this.array = response.data
				if(this.array.data){
					this.array = this.array.data
						console.log('data', this.array);
				}
			
			}
		}
	},
};
</script>

<style>
#app {
	font-family: Poppins, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: #f4f9fc !important;
   
}
</style>