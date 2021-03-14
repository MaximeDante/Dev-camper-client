<template>
	<section>
		<spinner :isLoading="isLoading" />
		<b-modal
			id="signInModal"
			ref="signInModal"
			v-model="isShowingSignInModal"
			centered
			lazy
			size="md"
			dialog-class="auth-modal-dialog"
			content-class="auth-modal-content"
			body-class="p-0"
			hide-header
			hide-footer
			no-fade
			no-stacking
		>
			<div class="modal-container p-3">
				<div class="modal-title text-center">
					<h1>Login</h1>
				</div>
				<div class="modal-form p-3">
					<b-form :novalidate="true" @submit.prevent="login">
						<b-form-row>
							<b-col md="12">
								<b-form-group
									id="email-fieldset"
									description="Email"
									label=""
									label-for="email"
									label-align="left"
									label-size="sm"
								>
									<b-form-input
										id="email"
										v-model="$v.form.email.$model"
										placeholder="Email"
										trim
										type="email"
										:state="validateState('email')"
									/>
									<b-form-invalid-feedback v-if="!$v.form.email.required && $v.form.email">
										Email is required
									</b-form-invalid-feedback>
								</b-form-group>
							</b-col>
						</b-form-row>
						<b-form-row>
							<b-col md="12">
								<b-form-group
									id="password-fieldset"
									description="Password"
									label=""
									label-for="password"
									label-align="left"
									label-size="sm"
								>
									<b-form-input
										id="password"
										v-model="$v.form.password.$model"
										placeholder="Password"
										trim
										type="password"
										:state="validateState('password')"
									/>
									<b-form-invalid-feedback v-if="!$v.form.password.required">
										Password is required
									</b-form-invalid-feedback>
								</b-form-group>
							</b-col>
						</b-form-row>
						<b-form-row>
							<b-col md="12">
								<b-form-group>
									<AppButton
										class="auth-button"
										type="submit"
										btn-style="inverted"
										>Sign In</AppButton
									>
								</b-form-group>
							</b-col>
						</b-form-row>
						<b-form-row>
							<b-col md="12">
								<b-form-group class="text-right subtleText">
									<a href="#" @click="onForgotPassswordClick">
										Forgot Password?
									</a>
								</b-form-group>
							</b-col>
						</b-form-row>
						<b-form-row v-if="errors.error">
							<b-col md="12">
								<b-form-group class="">
									<b-alert show variant="danger">
										{{ errors.error }}
									</b-alert>
								</b-form-group>
							</b-col>
						</b-form-row>
					</b-form>
				</div>
			</div>
		</b-modal>
	</section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import _ from "lodash";
import { required, email, minLength } from "vuelidate/lib/validators";
import AppButton from "@/components/UI/AppButton";
export default {
	name: "SignIn",
	components: {
		AppButton: AppButton,
	},
	data() {
		return {
			form: {
				email: "",
				password: "",
			},
			errors: {},
			user: {},
			isLoading: false,
		};
	},
	validations: {
		form: {
			email: {
				required,
				email,
			},
			password: {
				required,
				minLength: minLength(6),
			},
		},
	},
	mounted() {},
	computed: {
		...mapGetters({}),
		isShowingSignInModal: {
			get() {
				return this.$store.getters["modal/isShowingSignInModal"];
			},
			set(newValue) {
				this.$store.dispatch("modal/changeSignInVisibility", newValue);
			},
		},
	},
	watch: {
		isShowingSignInModal() {
			this.resetForm();
		},
	},
	methods: {
		...mapActions({
			showSignUp: "modal/changeSignUpVisibility",
			showForgotPassword: "modal/changeForgotPasswordVisibility",
			setToken: "auth/setToken",
			getCurrentUser: "auth/getCurrentUser",
		}),
		onForgotPassswordClick() {
			this.showForgotPassword(true);
		},
		validateState(name) {
			const { $dirty, $error } = _.get(this.$v.form, name, null);
			const errors = _.get(this.errors, name, null);
			let valid = null;
			if ($dirty) {
				valid = !$error;
			}
			if (errors) {
				valid = false;
			}
			return valid;
		},

		async login() {
			this.errors = {};
			this.$v.form.$touch();
			if (this.$v.form.$anyError) {
				return;
			}
			console.log(this.form);
			this.isLoading = true;
			const response = await this.$services.authService.login(this.form);
			if (response && response.data) {
				if (response.data.token) {
					this.$cookies.set("dev-camper-token", response.data.token, 60 * 60 * 24);
					this.setToken(response.data.token);
				}
				// const getUser = await this.$services.authService.getCurrentUser()
				// console.log('user', getUser)
				this.getCurrentUser();
				this.resetForm();
				this.$bvModal.hide("signInModal");
			} else if (response && response.errors) {
				this.errors = response.errors ?? {};
				console.log("error", this.errors);
			}
			this.isLoading = false;
		},
		resetForm() {
			this.errors = {};
			this.$v.$reset();
			this.form = {
				email: "",
				password: "",
			};
		},
	},
};
</script>

<style scoped>
.modal-container {
	background: var(--third-color);
}

.auth-button {
	width: 100%;
}

.subtleText a {
	color: var(--first-color);
}
</style>
