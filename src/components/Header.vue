<template>
	<b-navbar fixed toggleable class="navbar">
		<div class="container">
			<b-navbar-brand class="nav-brand"  href="#">DevCamper</b-navbar-brand>
			<b-navbar-nav class="nav-items">
				<b-nav-item class="nav-item ">Login</b-nav-item>
				<b-nav-item class="nav-item ">Register</b-nav-item>
				<b-nav-item class="nav-item ">Browse Bootcamps</b-nav-item>
			</b-navbar-nav>
		</div>
	</b-navbar>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-brand {
	font-size: 1.5rem;
}
.navbar {
	background: var(--first-color);
}

.nav-items {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
}

.nav-item {
	position: relative;
	margin: 0 0.3rem;
}

.nav-item:hover::after {
	cursor: pointer;
	content: "";
	position: absolute;
	left: 10%;
	right: 10%;
	bottom: 0;
	border: 2px solid var(--second-color);
}

@media (max-width: 768px) {
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .nav-items{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
}


</style>
