<template>
	<div>
		<router-link :to="{name: 'bootcamp.details' , params: { bootcampId: this.id }}">
			<b-card no-body class="overlow-hidde mb-3 card ">
			<b-row no-gutters>
				<b-col md="6">
					<b-card-img
						src="https://picsum.photos/100/50/?image=3"
						alt="Image"
					></b-card-img>
				</b-col>
				<b-col md="6">
					<b-card-body>
						<b-card-text>
							<div class="info-container">
								<h5>{{ name }}</h5>
								<span
									><b-badge variant="info">{{ averageRating }}</b-badge></span
								>
							</div>
							<div>
								<b-badge class="mb-2">{{ address }}</b-badge>
								<p>{{ description }}</p>
							</div>
						</b-card-text>
					</b-card-body>
				</b-col>
			</b-row>
		</b-card>
	</router-link>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	components: {},
	props: {
		bootcamp: {},
	},
	data() {
		return {};
	},
	computed: {
		...mapGetters({}),
		id() {
			let value = "";
			if (this.bootcamp && this.bootcamp.id) {
				value = this.bootcamp.id;
			}
			return value;
		},
		name() {
			let value = "";
			if (this.bootcamp && this.bootcamp.name) {
				value = this.bootcamp.name;
			}
			return value;
		},
		averageRating() {
			let value = "";
			if (this.bootcamp && this.bootcamp.averageRating) {
				value = this.bootcamp.averageRating;
			}
			return value;
		},
		address() {
			let value = "";
			if (this.bootcamp && this.bootcamp.location) {
				if (this.bootcamp.location.city)
					value = `${this.bootcamp.location.city}`;
				if (this.bootcamp.location.state) {
					value = `${this.bootcamp.location.city}, ${this.bootcamp.location.state}`;
				}
			}
			return value;
		},
		description() {
			let value = "";
			if (this.bootcamp && this.bootcamp.description) {
				value = this.bootcamp.description;
				if (value.length > 100) {
					value = value.substring(0, 100) + " ...";
				}
			}
			return value;
		},
	},
	watch: {},
	methods: {
	},
};
</script>

<style scoped>
.container {
	display: flex;
	background: white;
}
.info-container {
	display: flex;
	justify-content: space-between;
}
.info-container__value {
	display: flex;
	justify-content: space-between;
}
a {
	text-decoration: none;
	color: black;
}
</style>
