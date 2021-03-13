export default {
	data: () => {
		return {};
	},
	methods: {
		iconTodisplay(bootcampKey) {
			let icon = "❌";
			if (bootcampKey) {
				icon = "✔️";
			}

			return icon;
		},
	},
};
