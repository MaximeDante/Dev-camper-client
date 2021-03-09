<template>
	<div>
		<b-card>
			<template #header>
				<h4 class="mb-0">Front End Development</h4>
			</template>
			<b-card-text>
				<p><strong>Duration: 8 weeks</strong></p>
				<p>
					This course will provide you with all of the essentials to become a
					successful frontend web developer. You will learn to master HTML, CSS
					and front end JavaScript, along with tools like Git, VSCode and front
					end frameworks like Vue
				</p>
			</b-card-text>
			<b-list-group flush>
				<b-list-group-item>Cost: R8000</b-list-group-item>
				<b-list-group-item>Skilled Required: Beginner</b-list-group-item>
				<b-list-group-item>Scholarship: Available ✔️ </b-list-group-item>
			</b-list-group>
		</b-card>
	</div>
</template>

<script>
export default {
	name: "course",
	components: {},
	data() {
		return {
			isLoading: false,
		};
	},
	async mounted() {},
	computed: {},
	watch: {},
	methods: {},
};
</script>

<style scoped>
 .card-header{
    background: var(--fourth-color);
 }
 .list-group-item {
     background: transparent;
 }
</style>
