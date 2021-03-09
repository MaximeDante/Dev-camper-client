<template>
	<div class="footer">
		<div class="footer-copyright">
			<p class="m-0">Copyrigths &copy; DevCamper {{ fullYear }}</p>
		</div>
		<div class="footer-social">
			<a href="#"><i class="fab fa-facebook"></i></a>
			<a href="#"><i class="fab fa-twitter"></i></a>
		</div>
	</div>
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
	position: absolute;
	width: 100%;
	/* bottom: 0;
	background: var(--fourth-color);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center; */
}
/* .footer-social a {
	color: var(--fifth-color);
	margin-left: 1rem;
	font-size: 1.5rem;
}
.footer-social a:hover {
	color: var(--first-color);
} */
</style>
