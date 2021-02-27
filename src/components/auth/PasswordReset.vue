<template>
	<section>
		<b-modal
			id="resetPasswordModal"
			ref="resetPasswordModal"
			v-model="isShowingPasswordResetModal"
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
					<h1>Update Your Password</h1>
				</div>
				<div class="modal-form p-3">
					<b-form :novalidate="true" @submit.prevent="">
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
										placeholder="Password"
										trim
										type="password"
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
										placeholder="Confirm Password"
										trim
										type="password"
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
										>Update Password</AppButton
									>
								</b-form-group>
							</b-col>
						</b-form-row>
						<b-form-row>
							<b-col md="12">
								<b-form-group class="text-right subtleText">
									<a href="#" @click="onSignInClick">
									Sign In
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
		isShowingPasswordResetModal: {
			get() {
				return this.$store.getters["modal/isShowingPasswordResetModal"];
			},
			set(newValue) {
				this.$store.dispatch("modal/changePasswordResetVisibility", newValue);
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
