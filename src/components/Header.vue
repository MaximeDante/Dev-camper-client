<template>
	<b-navbar fixed toggleable class="navbar">
		<div class="container">
			<b-navbar-brand class="nav-brand" href="#">DevCamper</b-navbar-brand>
			<b-navbar-nav v-show="!isAuthenticated" class="nav-items">
				<b-nav>
					<b-nav-item @click="onSignInClick" class="nav-item "
						>Login</b-nav-item
					>
					<b-nav-item @click="onSignUpClick" class="nav-item "
						>Register</b-nav-item
					>
					<b-nav-item class="nav-item ">Browse Bootcamps</b-nav-item>
				</b-nav>
			</b-navbar-nav>
			<b-dropdown
				v-show="isAuthenticated"
				variant="clear"
				:text="currentUserName"
			>
				<b-dropdown-item href="#">Manage Bootcamp</b-dropdown-item>
				<b-dropdown-item href="#">Manage Reviews</b-dropdown-item>
				<b-dropdown-item href="#">Manage Account</b-dropdown-item>
				<b-dropdown-item @click="logout">Logout</b-dropdown-item>
			</b-dropdown>
		</div>
	</b-navbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	name: "nav-bar",
	components: {},
	data() {
		return {};
	},
	mounted() {},
	computed: {
		...mapGetters({
			isAuthenticated: "auth/isAuthenticated",
			loggedUser: "auth/loggedUser",
		}),
		currentUserName() {
			let name = "";
			if (this.loggedUser && this.loggedUser.name) {
				name = this.loggedUser.name;
			}
			return name;
		},
	},
	watch: {},
	methods: {
		...mapActions({
			showSignUp: "modal/changeSignUpVisibility",
			showSignIn: "modal/changeSignInVisibility",
			logoutUser: "auth/logoutUser",
		}),
		onSignInClick() {
			this.showSignIn(true);
		},
		onSignUpClick() {
			this.showSignUp(true);
		},
		async logout() {
			const response = await this.$services.authService.logout();
			if (response && response.data) {
				console.log(response.data);
				this.logoutUser();
			} else if (response && response.errors) {
				console.log("error", response.errors);
			}
		},
	},
};
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

.navbar-nav .open .dropdown-menu {
	background-color: var(--fifth-color);
	border-color: var(--fifth-color);
}

@media (max-width: 768px) {
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.nav-items {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}
</style>
