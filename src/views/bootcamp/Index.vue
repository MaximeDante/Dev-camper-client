<template>
	<div class="page-content container">
		<section class="sidebar">
			<div>
				<Sidebar />
			</div>
		</section>
		<section class="content">
        <spinner :isLoading="isLoading" />
			<div v-for="(bootcamp, index) in bootcamps" :key="index">
				<Bootcamp :bootcamp="bootcamp"/>
			</div>
		</section>
	</div>
</template>

<script>
import Bootcamp from "@/components/Bootcamp";
import Sidebar from "@/components/Sidebar";
export default {
	name: "Bootcamps",
	components: {
		Bootcamp,
        Sidebar
	},
	data() {
		return {
            isLoading: false,
            bootcamps: [],
        };
	},
	async mounted() {
        await this.fetchBootcamps()
    },
	computed: {},
	watch: {},
	methods: {
        async fetchBootcamps () {
            this.isLoading = true;
            let results;
			const response = await this.$services.BootcampsService.getAll();
			if (response && response.data) {
				console.log(response.data)
                results = response.data
                if (results.data){
                    this.bootcamps = results.data
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
.page-content {
	margin: 2rem 0;
	margin-left: auto;
     max-width: 1140px;
	margin-right: auto;
	padding: 0;
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: auto;
	grid-auto-rows: minmax(10px, auto);
	grid-template-areas:
		"sidebar"
		"content";
}
.content {
	background-color: transparent;
	grid-area: content;
}
.sidebar {
	background-color: transparent;
	grid-area: sidebar;
}

@media only screen and (min-width: 769px) {
	.page-content {
		padding: 0;
		grid-gap: 2rem;
		grid-template-columns: 330px auto;
		grid-template-areas: "sidebar content";
	}
}
</style>
