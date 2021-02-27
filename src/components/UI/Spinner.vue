<template>
	<div v-if="isLoading" class="spinner-container">
		<div class="spinner">
			<div class="dot1"></div>
			<div class="dot2"></div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'spinner',
  props: {
    isLoading:{
      type: Boolean,
      default: false,
    },
  },
  components: {

  },

};
</script>

<style scoped>
.spinner-container {
	top: 40%;
	left: 0;
	right: 0;
	bottom: 0;
	position: fixed;
	z-index: 10000;
   /* backdrop-filter: blur(4px); */
}
.spinner {
	margin: 100px auto;
	width: 40px;
	height: 40px;
	position: relative;
	text-align: center;

	-webkit-animation: sk-rotate 2s infinite linear;
	animation: sk-rotate 2s infinite linear;
}

.dot1,
.dot2 {
	width: 60%;
	height: 60%;
	display: inline-block;
	position: absolute;
	top: 0;
	background-color: var(--second-color);
	border-radius: 100%;

	-webkit-animation: sk-bounce 2s infinite ease-in-out;
	animation: sk-bounce 2s infinite ease-in-out;
}

.dot2 {
	top: auto;
	bottom: 0;
	-webkit-animation-delay: -1s;
	animation-delay: -1s;
}

@-webkit-keyframes sk-rotate {
	100% {
		-webkit-transform: rotate(360deg);
	}
}
@keyframes sk-rotate {
	100% {
		transform: rotate(360deg);
		-webkit-transform: rotate(360deg);
	}
}

@-webkit-keyframes sk-bounce {
	0%,
	100% {
		-webkit-transform: scale(0);
	}
	50% {
		-webkit-transform: scale(1);
	}
}

@keyframes sk-bounce {
	0%,
	100% {
		transform: scale(0);
		-webkit-transform: scale(0);
	}
	50% {
		transform: scale(1);
		-webkit-transform: scale(1);
	}
}
</style>
