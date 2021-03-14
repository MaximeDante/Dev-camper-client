<template>
	<div>
		<spinner :isLoading="isLoading" />
		<div v-for="(course, index) in courses" :key="index">
			<b-card class="mb-3">
				<template #header>
					<h4 class="mb-0">{{ course.title }}</h4>
				</template>
				<b-card-text>
					<p>
						<strong>Duration: {{ course.weeks }} weeks</strong>
					</p>
					<p>
						{{ course.description }}
					</p>
				</b-card-text>
				<b-list-group flush>
					<b-list-group-item>Cost: R{{ course.tuition }}</b-list-group-item>
					<b-list-group-item
						>Skilled Required: {{ course.minimumSkill }}</b-list-group-item
					>
					<b-list-group-item
						>Scholarship: {{ iconTodisplay(course.scholarshipAvailable) }}
					</b-list-group-item>
				</b-list-group>
			</b-card>
		</div>
	</div>
</template>

<script>
import reusableFunctions from "@/mixins/reusableFunctions";
export default {
	mixins: [reusableFunctions],
	name: "course",
	components: {},
	props: {
		id: {},
	},
	data() {
		return {
			isLoading: false,
			courses: [],
			errors: {},
		};
	},
	async mounted() {
		// await this.fetchCourses();
	},
	computed: {},
	watch: {
		id: {
			handler(oldVal, newVal) {
				if (oldVal !== newVal) {
					this.fetchCourses();
				}
			},
		},
	},
	methods: {
		async fetchCourses() {
			this.isLoading = true;
			let results;
			const response = await this.$services.coursesService.getAll(this.id);
			if (response && response.data) {
				console.log(response.data);
				results = response.data;
				if (results.data) {
					this.courses = results.data;
				}
			} else if (response && response.errors) {
				this.errors = response.errors ?? {};
				console.log("error", this.errors);
			}
			this.isLoading = false;
		},
	},
};
</script>

<style scoped>
.card-header {
	background: var(--fourth-color);
}
.list-group-item {
	background: transparent;
}
</style>
