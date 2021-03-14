<template>
	<section class="body">
		<div class="intro text-center">
			<div class="intro-text">
				<h1>Find a Coding Bootcamp</h1>
				<p>
					Find, Rate and Read reviews on coding bootcamps
				</p>
				<p>
					1-on-1 coding bootcamps that accelerate your entry into a fulfilling
					tech career
				</p>
				<p class="text-muted mt-3">Join 150 other students</p>
				<vue-particles
					class="particles-js"
					color="#000000"
					shapeType="polygon"
					:hovereffect="true"
					:particleOpacity="0.7"
					:linesDistance="200"
					:lineLinked="true"
					clickMode="push"
				></vue-particles>
			</div>
		</div>
		<div class="text-center">
			<router-link to="/bootcamps">
				<AppButton class="cta-button" type="button" btn-style="inverted"
					>Find Bootcamps</AppButton
				>
			</router-link>
		</div>
		<div class="why-us mt-3 my-5">
			<ul class="nav-items">
				<li>
					Why Choose us
				</li>
				<li>
					Earn double you salary
				</li>
				<li>
					Get a coding job in 3 months
				</li>
				<li>
					Reach your career outcomes
				</li>
			</ul>
		</div>
		<div class="about-us mt-3 my-5">
			<div class="text-center">
				<h2>Who are we ?</h2>
				<p class="caption">
					Learn to code with expert 1-on-1 mentorship. Our online coding
					bootcamps will take you from absolute beginner to job ready in just 3
					to 6 months.
				</p>
			</div>
		</div>
		<div class="testimonials container mt-3 my-5">
			<h2 class="text-center">Hear What our students have to say</h2>
			<div class="testimonials-ccontent mt-4">
				<div>
					<b-card
						title="Kevin Smith"
						img-src="https://picsum.photos/600/300/?image=25"
						img-alt="Image"
						img-top
						tag="article"
						style="max-width: 20rem;"
						class="mb-2"
					>
						<b-card-text class="text-muted">
							Web development Student
						</b-card-text>
						<b-card-text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</b-card-text>
					</b-card>
				</div>
				<div>
					<b-card
						title="John Doe"
						img-src="https://picsum.photos/600/300/?image=25"
						img-alt="Image"
						img-top
						tag="article"
						style="max-width: 20rem;"
						class="mb-2"
					>
						<b-card-text class="text-muted">
							Web development Student
						</b-card-text>
						<b-card-text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</b-card-text>
					</b-card>
				</div>
				<div>
					<b-card
						title="Jane Doe"
						img-src="https://picsum.photos/600/300/?image=25"
						img-alt="Image"
						img-top
						tag="article"
						style="max-width: 20rem;"
						class="mb-2"
					>
						<b-card-text class="text-muted">
							Software Engineer Student
						</b-card-text>
						<b-card-text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</b-card-text>
					</b-card>
				</div>
			</div>
		</div>
		<div class="sponsors container  mt-3 my-5">
			<hr />
			<ul class="nav-items">
				<li>
					Sponsor 1
				</li>
				<li>
					Sponsor 2
				</li>
				<li>
					Sponsor 3
				</li>
				<li>
					Sponsor 4
				</li>
			</ul>
			<hr />
		</div>
	</section>
</template>

<script>
export default {
	name: "home",
	components: {},
	data() {
		return {};
	},
	mounted() {},
	computed: {},
	watch: {},
	methods: {},
};
</script>

<style>
.intro {
	position: relative;
	padding-top: 4rem;
}
.intro-text {
	height: 18rem;
}
.particles-js {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.cta-button {
	width: 30%;
}
.why-us {
	padding: 2rem 0;
	background-color: var(--third-color);
}
.nav-items {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.why-us .nav-items li:first-child {
	color: #c39c4a;
	text-transform: uppercase;
}
.caption {
	margin-left: 20rem;
	margin-right: 20rem;
}
.testimonials .testimonials-ccontent {
	display: flex;
	justify-content: space-between;
}
hr {
	margin-left: 2rem;
	margin-right: 2rem;
}
.sponsors .nav-items li {
	color: #9a9a9a;
	font-weight: 300;
}
@media (max-width: 768px) {
	.nav-items {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.caption {
		margin-left: 0;
		margin-right: 0;
	}
	.cta-button {
		width: 50%;
	}
	.testimonials .testimonials-ccontent {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
	}
}
</style>
