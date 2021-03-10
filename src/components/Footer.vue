<template>
	<footer class="footer">
		<div class="container">
			<div class="copyright text-center">&copy; {{ fullYear }} Dev Camper</div>
		</div>
	</footer>
</template>

<script>
export default {
	data() {
		return {};
	},
	computed: {
		fullYear() {
			return new Date().getFullYear();
		},
	},
	watch: {},
	methods() {},
};
</script>

<style scoped>
.footer {
	width: 100%;
	background-color: #2c2c2c;
	padding: 1rem 0;
}
.copyright {
	color: white;
}
</style>
