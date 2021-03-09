import { ServiceFunctions } from "@/utils/services";
const resource = "bootcamps";

export default class BootcampsService {
	constructor($api) {
		this.api = $api;
	}

	getOne(id) {
		try {
			return this.api.get(`${resource}/${id}`).catch((err) => {
				const errors = ServiceFunctions.getErrors(err);
				console.log(errors);
				return { data: null, errors: errors };
			});
		} catch (error) {
			console.log(error);
		}
		return { data: null, errors: [] };
	}
	getAll() {
		try {
			return this.api.get(`${resource}/`).catch((err) => {
				const errors = ServiceFunctions.getErrors(err);
				console.log(errors);
				return { data: null, errors: errors };
			});
		} catch (error) {
			console.log(error);
		}
		return { data: null, errors: [] };
	}
	create() {
		try {
			return this.api.post(`${resource}/`).catch((err) => {
				const errors = ServiceFunctions.getErrors(err);
				console.log(errors);
				return { data: null, errors: errors };
			});
		} catch (error) {
			console.log(error);
		}
		return { data: null, errors: [] };
	}
	update(id, payload) {
		try {
			return this.api.put(`${resource}/${id}/${payload}`).catch((err) => {
				const errors = ServiceFunctions.getErrors(err);
				console.log(errors);
				return { data: null, errors: errors };
			});
		} catch (error) {
			console.log(error);
		}
		return { data: null, errors: [] };
	}
	delete(id) {
		try {
			return this.api.delete(`${resource}/${id}`).catch((err) => {
				const errors = ServiceFunctions.getErrors(err);
				console.log(errors);
				return { data: null, errors: errors };
			});
		} catch (error) {
			console.log(error);
		}
		return { data: null, errors: [] };
	}
	updatePhoto(id, payload) {
		try {
			return this.api.put(`${resource}/${id}/${payload}`).catch((err) => {
				const errors = ServiceFunctions.getErrors(err);
				console.log(errors);
				return { data: null, errors: errors };
			});
		} catch (error) {
			console.log(error);
		}
		return { data: null, errors: [] };
	}

}
