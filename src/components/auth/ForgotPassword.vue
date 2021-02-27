<template>
	<section>
		<b-modal
			id="forgotPasswordModal"
			ref="forgotPasswordModal"
			v-model="isShowingForgotPasswordModal"
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
					<h1>Forgot Password ?</h1>
				</div>
				<div class="modal-form p-3">
					<b-form :novalidate="true" @submit.prevent="">
						<b-form-row>
							<b-col md="12">
								<b-form-group
									id="email-fieldset"
									description=""
									label=""
									label-for="email"
									label-align="left"
									label-size="sm"
								>
									<b-form-input
										id="email"
										placeholder="Email"
										trim
										type="email"
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
										>Reset Password</AppButton
									>
								</b-form-group>
							</b-col>
						</b-form-row>
						<b-form-row>
							<b-col md="12">
								<b-form-group class="text-right subtleText">
									<a href="#" @click="onSignInClick">
										Back to Sign in?
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
import AppButton from "@/components/UI/AppButton";
export default {
	name: "ForgotPassword",
	components: {
		AppButton: AppButton,
	},
	data() {
		return {};
	},
	mounted() {},
	computed: {
		...mapGetters({}),
		isShowingForgotPasswordModal: {
			get() {
				return this.$store.getters["modal/isShowingForgotPasswordModal"];
			},
			set(newValue) {
				this.$store.dispatch("modal/changeForgotPasswordVisibility", newValue);
			},
		},
	},
	watch: {},
	methods: {
		...mapActions({
			showSignIn: "modal/changeSignInVisibility",
		}),
		onSignInClick() {
			this.showSignIn(true);
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
