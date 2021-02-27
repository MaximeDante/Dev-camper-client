<template>
	<section class="home-container mb-4">
		<div class="home-container__image">
			<b-img :src="image" fluid alt="home-image" />
		</div>
		<div class="home-container__text">
			<h1>Find a Coding Bootcamp</h1>
			<p class="ml11">
				<span class="text-wrapper">
					<span class="letters"
						>Find rate and read reviews on coding bootcamps
					</span>
				</span>
			</p>
			<AppButton type="button" btn-style="inverted">Find Bootcamps</AppButton>
		</div>
	</section>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
	name: "Home",
	components: {},
	data() {
		return {
			image: require("@/assets/img/home-image.png"),
		};
	},
	mounted() {
		// Wrap every letter in a span
		var textWrapper = document.querySelector(".ml11 .letters");
		textWrapper.innerHTML = textWrapper.textContent.replace(
			/([^\00-\80]|\w)/g,
			"<span class='letter'>$&</span>"
		);

		anime
			.timeline({ loop: true })
			.add({
				targets: ".ml11 .line",
				scaleY: [0, 1],
				opacity: [0.5, 1],
				easing: "easeOutExpo",
				duration: 700,
			})
			.add({
				targets: ".ml11 .line",
				translateX: [
					0,
					document.querySelector(".ml11 .letters").getBoundingClientRect()
						.width + 10,
				],
				easing: "easeOutExpo",
				duration: 700,
				delay: 100,
			})
			.add({
				targets: ".ml11 .letter",
				opacity: [0, 1],
				easing: "easeOutExpo",
				duration: 600,
				offset: "-=775",
				delay: (el, i) => 34 * (i + 1),
			})
			.add({
				targets: ".ml11",
				opacity: 0,
				duration: 1000,
				easing: "easeOutExpo",
				delay: 1000,
			});
	},
	computed: {},
	watch: {},
	methods: {},
};
</script>

<style>
.home-container {
	display: grid;
	grid-template-columns: 50% 50%;
	grid-auto-rows: minmax(50px, auto);
	/* max-width: 1117px; */
	/* padding: 0 50px; */
	max-height: 100vh;
}

.home-container__image{
	width: 80%;
}

.home-container__text {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    text-align: center;
    word-wrap: break-word;
    
}

@media (max-width: 768px) {
	.home-container {
		grid-template-columns: auto;
		grid-auto-rows: minmax(50px, auto);
	}

}

/* Animeted Text */
.ml11 {
}

.ml11 .text-wrapper {
	position: relative;
	display: inline-block;
	padding-top: 0.1em;
	padding-right: 0.05em;
	padding-bottom: 0.15em;
}

.ml11 .line {
	opacity: 0;
	position: absolute;
	left: 0;
	height: 100%;
	width: 3px;
	background-color: #fff;
	transform-origin: 0 50%;
}

.ml11 .line1 {
	top: 0;
	left: 0;
}

.ml11 .letter {
	display: inline-block;
	line-height: 1em;
}
</style>
