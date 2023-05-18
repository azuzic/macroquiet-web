import axios from "axios";
import jwt_decode from "jwt-decode";

let Service = axios.create({
    baseURL: "https://macroquiet.herokuapp.com/api/",
    timeout: 6000,
});

//Before each sent request to the backend, send the Token in the header:
Service.interceptors.request.use((request) => {
    let token = Auth.getLocalStorage().token;
    try {
        request.headers["Authorization"] = "Bearer " + token;
    } catch (e) {
        console.error(e);
    }
    return request;
});

let Auth = {
    getLocalStorage() {
        let user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            let decodedToken = jwt_decode(user.token);
            if (Date.now() >= decodedToken.exp * 1000) return false;
            return user;
        } else return false;
    },
    async logInMQ(userData) {
        try {
            return Service.post("auth", userData);
        } catch (error) {
            let detailedError = {
                functionName: "Auth - logInMQ",
                userData: userData,
                error: error,
            };
            console.warn(detailedError);
        }
    },
    logOut() {
        localStorage.removeItem("user");
    },
};

let Public = {
    async getData(dataName) {
        try {
            return Service.get(`public/data/${dataName}`);
        } catch (error) {
            let detailedError = {
                functionName: "Public - getData",
                dataName: dataName,
                error: error,
            };
            console.warn(detailedError);
        }
    },
    async postEmailForPasswordReset(email) {
        try {
            return Service.post("users/resetpassword", email);
        } catch (error) {
            let detailedError = {
                functionName: "Public - postEmailForPasswordReset",
                email: email,
                error: error,
            };
            console.warn(detailedError);
        }
    },
    async putResetPassword(data) {
        try {
            return Service.put("users/resetpassword", data);
        } catch (error) {
            let detailedError = {
                functionName: "Public - putResetPassword",
                data: data,
                error: error,
            };
            console.warn(detailedError);
        }
    },
};

let User = {
    async registerUserMQ(userData) {
        try {
            return Service.post("users", userData);
        } catch (error) {
            let detailedError = {
                functionName: "User - registerUserMQ",
                userData: userData,
                error: error,
            };
            console.warn(detailedError);
        }
    },
    async getCurrentUserProfile() {
        let token = Auth.getLocalStorage();
        if (!token) return false;
        try {
            let userData = await Service.get("users/current/profile");
            return { userData: userData, token: token };
        } catch (error) {
            let detailedError = {
                functionName: "User - getCurrentUserProfile",
                error: error,
            };
            console.warn(detailedError);
        }
    },
    async putChangePassword(data) {
        try {
            return Service.put("users/current/password", data);
        } catch (error) {
            let detailedError = {
                functionName: "User - putChangePassword",
                data: data,
                error: error,
            };
            console.warn(detailedError);
        }
    },
    async putChangeUsername(data) {
        try {
            return Service.put("users/current/username", data);
        } catch (error) {
            let detailedError = {
                functionName: "User - putChangeUsername",
                data: data,
                error: error,
            };
            console.warn(detailedError);
        }
    },
};

let Admin = {
    getData(dataName) {
        try {
            return Service.get(`admin/data/${dataName}`);
        } catch (error) {
            let detailedError = {
                functionName: "Admin - getData",
                dataName: dataName,
                error: error,
            };
            console.warn(detailedError);
        }
    },
    async uploadImage(formData) {
        try {
            return await Service.post("admin/image", formData);
        } catch (error) {
            let detailedError = {
                functionName: "Admin - uploadImage",
                dataName: formData,
                error: error,
            };
            console.warn(detailedError);
        }
    },
    async postData(place, data) {
        try {
            return await Service.post(`admin/data/${place}`, data);
        } catch (error) {
            let detailedError = {
                functionName: "Admin - postData",
                place: place,
                data: data,
                error: error,
            };
            console.warn(detailedError);
        }
    },
    async putData(place, data) {
        try {
            return await Service.put(`admin/data/${place}`, data);
        } catch (error) {
            let detailedError = {
                functionName: "Admin - putData",
                place: place,
                data: data,
                error: error,
            };
            console.warn(detailedError);
        }
    },
    async patchData(place, data) {
        try {
            return await Service.patch(`admin/data/${place}`, data);
        } catch (error) {
            let detailedError = {
                functionName: "Admin - patchData",
                place: place,
                data: data,
                error: error,
            };
            console.warn(detailedError);
        }
    },
    async deleteData(place, data) {
        try {
            return await Service.delete(`admin/data/${place}`, data);
        } catch (error) {
            let detailedError = {
                functionName: "Admin - deleteData",
                place: place,
                data: data,
                error: error,
            };
            console.warn(detailedError);
        }
    },
};

export { Public, User, Auth, Admin };
