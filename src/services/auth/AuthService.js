import { ServiceFunctions } from "@/utils/services";
const resource = "auth";

export default class AuthService {
	constructor($api) {
		this.api = $api;
	}

	login(data) {
		try {
			const payload = {
				email: data.email,
				password: data.password,
			};
			return this.api.post(`${resource}/login`, payload).catch((err) => {
				const errors = ServiceFunctions.getErrors(err);
				console.log(errors);
				return { data: null, errors: errors };
			});
		} catch (error) {
			console.log(error);
		}
		return { data: null, errors: [] };
	}

	register(data) {
		try {
			const payload = {
				name: `${data.name} ${data.surname}`,
				email: data.email,
				password: data.password,
			};
			return this.api.post(`${resource}/register`, payload).catch((err) => {
				const errors = ServiceFunctions.getErrors(err);
				console.log(errors);
				return { data: null, errors: errors };
			});
		} catch (error) {
			console.log(error);
		}
	}
    resetPassword(data){
        try {
			const payload = {
				password: data.password,
			};
			return this.api.put(`${resource}/resetpassword`, payload).catch((err) => {
				const errors = ServiceFunctions.getErrors(err);
				console.log(errors);
				return { data: null, errors: errors };
			});
		} catch (error) {
			console.log(error);
		}
    }
    forgotPassword(data){
        try {
			const payload = {
				email: data.email,
			};
			return this.api.post(`${resource}/forgotPassword`, payload).catch((err) => {
				const errors = ServiceFunctions.getErrors(err);
				console.log(errors);
				return { data: null, errors: errors };
			});
		} catch (error) {
			console.log(error);
		}
    }
    getCurrentUser(){
        try {
			return this.api.get(`${resource}/me`).catch((err) => {
				const errors = ServiceFunctions.getErrors(err);
				console.log(errors);
				return { data: null, errors: errors };
			});
		} catch (error) {
			console.log(error);
		}
    }
    updateUserDetails(data){
        try {
            const payload = {
				name: data.name,
                email: data.email
			};
			return this.api.put(`${resource}/updatedetails`, payload).catch((err) => {
				const errors = ServiceFunctions.getErrors(err);
				console.log(errors);
				return { data: null, errors: errors };
			});
		} catch (error) {
			console.log(error);
		}
    }
    updateUserPassword(data){
        try {
            const payload = {
				currentPassword: data.currentPassword,
                newPassword: data.newPassword
			};
			return this.api.put(`${resource}/updatepassword`, payload).catch((err) => {
				const errors = ServiceFunctions.getErrors(err);
				console.log(errors);
				return { data: null, errors: errors };
			});
		} catch (error) {
			console.log(error);
		}
    }
    logout(){
        try {
			return this.api.get(`${resource}/logout`).catch((err) => {
				const errors = ServiceFunctions.getErrors(err);
				console.log(errors);
				return { data: null, errors: errors };
			});
		} catch (error) {
			console.log(error);
		}
    }
}
