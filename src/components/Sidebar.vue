<template>
	<div>
		<b-card title="Filter" class="card">
			<b-form @submit.prevent="" :novalidate="true">
				<b-form-group
					id="rating"
					description="By Rating"
					label-align="left"
					label-size="sm"
				>
					<v-select placeholder="Rating"> </v-select>
				</b-form-group>
				<b-form-group
					id="budget"
					description="By Budget"
					label-align="left"
					label-size="sm"
				>
					<v-select placeholder="Budget"> </v-select>
				</b-form-group>
				<b-form-group>
					<b-form-group>
						<AppButton type="submit" btn-style="inverted"
							>Find Bootcamps</AppButton
						>
					</b-form-group>
				</b-form-group>
			</b-form>
		</b-card>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	mounted() {},
	computed: {},
	watch: {},
	methods: {},
};
</script>

<style scoped></style>
