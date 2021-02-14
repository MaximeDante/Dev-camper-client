<template>
	<div id="app">
		<Header/>
		<router-view></router-view>
		<Footer/>
	</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
	name: "App",
	components: {
		Header: Header,
		Footer: Footer,
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
