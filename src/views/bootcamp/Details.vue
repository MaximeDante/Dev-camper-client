<template>
	<section class="container page-content">
		<spinner :isLoading="isLoading" />
		<article class="article">
			<div class="bootcamp-info">
				<h2>{{bootcamp.name}}</h2>
				<p>
					{{bootcamp.description}}
				</p>
				<p>
					<span class="text-muted">Average Course Cost</span>
					<span> R{{bootcamp.averageCost}}</span>
				</p>
			</div>
			<div class="courses-container">
				<Course
				:id="bootcamp.id" />
			</div>
		</article>
		<aside class="aside">
			<div class="bootcamp-info">
				<b-card
					img-src="https://picsum.photos/600/300/?image=25"
					img-alt="Image"
					img-top
				>
					<b-card-text class="bootcamp-rating">
						<h3 v-if="bootcamp.averageRating" class="text-center">
							<b-badge class="rounded-circle" rounded variant="success"
								>{{bootcamp.averageRating}}</b-badge
							>
							Rating
						</h3>
					</b-card-text>
					<b-card-text class="bootcamp-action-buttons text-center">
						<div class="d-flex flex-column justify-content-between">
							<AppButton type="button" btn-style="inverted">
								<i class="fas fa-comments"></i>
								Read Reviews
							</AppButton>
							<br />
							<AppButton type="button" btn-style="inverted">
								<i class="fas fa-pencil-at"></i>
								Write a Review
							</AppButton>
							<br />
							<AppButton type="button" btn-style="inverted">
								<i class="fas fa-globe"></i>
								Visit Webiste
							</AppButton>
						</div>
					</b-card-text>
					<b-card-text>
						<b-list-group flush>
							<b-list-group-item> {{iconTodisplay(bootcamp.housing)}} Housing</b-list-group-item>
							<b-list-group-item>  {{iconTodisplay(bootcamp.jobAssistance)}} Job Assistance</b-list-group-item>
							<b-list-group-item>  {{iconTodisplay(bootcamp.jobGuarantee)}} Job Guarantee</b-list-group-item>
						</b-list-group>
					</b-card-text>
				</b-card>
			</div>
		</aside>
	</section>
</template>

<script>
import Course from "@/components/Course";
import reusableFunctions from "@/mixins/reusableFunctions"
export default {
	mixins: [reusableFunctions],
	name: "Bootcamp-details",
	components: {
		Course,
	},
	data() {
		return {
			isLoading: false,
			bootcampId: '',
			bootcamp: {},
		};
	},
	async mounted() {
		this.bootcampId = this.$route.params.bootcampId ?? ''
		await this.fetchBootcamp()
	},
	computed: {
	},
	watch: {},
	methods: {
		async fetchBootcamp () {
			this.isLoading = true;
            let results;
			const response = await this.$services.BootcampsService.getOne(this.bootcampId);
			if (response && response.data) {
				console.log(response.data)
                results = response.data
                if (results.data){
                    this.bootcamp = results.data
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
		"aside"
		"article";
}
.content {
	background-color: transparent;
	grid-area: content;
}
.sidebar {
	background-color: transparent;
	grid-area: sidebar;
}
.rounded-circle {
	border-radius: 50%;
}
.list-group-item {
	background: transparent;
}

@media only screen and (min-width: 769px) {
	.page-content {
		padding: 0;
		grid-gap: 2rem;
		grid-template-columns: auto 330px;
		grid-template-areas: "article aside";
	}
}
</style>
