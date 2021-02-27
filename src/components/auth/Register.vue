<template>
	<section>
		<b-modal
			id="signUpModal"
			ref="signUpModal"
			v-model="isShowingSignUpModal"
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
					<h1>Register</h1>
				</div>
				<div class="modal-form p-3">
					<b-form :novalidate="true" @submit.prevent="Register">
						<b-form-group>
							<b-col md="12">
								<b-alert
									:show="showSuccessAlert"
									@dismiss-count-down="(count) => (showSuccessAlert = count)"
								>
									<p>Account successfully created</p>
								</b-alert>
							</b-col>
						</b-form-group>
						<b-form-row>
							<b-col md="6">
								<b-form-group
									id="name-fieldset"
									description="Name"
									label=""
									label-for="name"
									label-align="left"
									label-size="sm"
								>
									<b-form-input
										id="name"
										v-model="$v.form.name.$model"
										placeholder="Name"
										trim
										type="text"
										:state="validateState('name')"
									/>
								</b-form-group>
							</b-col>
							<b-col md="6">
								<b-form-group
									id="surname-fieldset"
									description="Surname"
									label=""
									label-for="surname"
									label-align="left"
									label-size="sm"
								>
									<b-form-input
										id="surname"
										v-model="$v.form.surname.$model"
										placeholder="Surname"
										trim
										type="text"
										:state="validateState('surname')"
									/>
								</b-form-group>
							</b-col>
						</b-form-row>
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
								</b-form-group>
							</b-col>
						</b-form-row>
						<b-form-row>
							<b-col md="12">
								<b-form-group
									id="confirmPassword-fieldset"
									description="Confirm Password"
									label=""
									label-for="confirm password"
									label-align="left"
									label-size="sm"
								>
									<b-form-input
										id="confirmPassword"
										v-model="$v.form.confirmPassword.$model"
										placeholder="Confirm Password"
										trim
										type="password"
										:state="validateState('confirmPassword')"
									/>
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
										>Sign Up</AppButton
									>
								</b-form-group>
							</b-col>
						</b-form-row>
						<b-form-row>
							<b-col md="12">
								<b-form-group class="text-right subtleText">
									<a href="#" @click="onSignInClick">
										Already have an account?
									</a>
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
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import AppButton from "@/components/UI/AppButton";
export default {
	name: "Register",
	components: {
		AppButton: AppButton,
	},
	data() {
		return {
			form: {
				name: "",
				surname: "",
				email: "",
				password: "",
				confirmPassword: "",
			},
			errors: {},
			showSuccessAlert: 0,
			isLoading: false,
		};
	},
	validations: {
		form: {
			name: {
				required,
				minLength: minLength(2),
			},
			surname: {
				required,
				minLength: minLength(2),
			},
			email: {
				required,
				email,
			},
			password: {
				required,
				minLength: minLength(6),
			},
			confirmPassword: {
				required,
				sameAsPassword: sameAs("password"),
			},
		},
	},
	mounted() {},
	computed: {
		...mapGetters({}),
		isShowingSignUpModal: {
			get() {
				return this.$store.getters["modal/isShowingSignUpModal"];
			},
			set(newValue) {
				this.$store.dispatch("modal/changeSignUpVisibility", newValue);
			},
		},
	},
	watch: {
		isShowingSignUpModal() {
			this.resetForm();
		},
	},
	methods: {
		...mapActions({
			showSignIn: "modal/changeSignInVisibility",
		}),
		onSignInClick() {
			this.showSignIn(true);
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
		async Register() {
			this.errors = {};
			this.$v.form.$touch();
			if (this.$v.form.$anyError) {
				return;
			}
			console.log(this.form);
			this.isLoading = true;
			const response = await this.$services.authService.register(this.form);
			if (response && response.data) {
				console.log("User Created");
				console.log("The data", response.data);
				this.resetForm();
				this.showSuccessAlert = 3
					setTimeout(() => {
					this.showSignIn(true)
				}, 3000)
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
				name: "",
				surname: "",
				email: "",
				password: "",
				confirmPassword: "",
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
