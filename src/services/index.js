import axios from "axios";

let Service = axios.create({
    baseURL: "https://macroquiet.herokuapp.com/api/",
    timeout: 6000,
});

//Before each sent request to the backend, send the Token in the header:
Service.interceptors.request.use((request) => {
    let token = Auth.getUserToken();
    try {
        request.headers["Authorization"] = "Bearer " + token;
    } catch (e) {
        console.error(e);
    }
    return request;
});

let Auth = {
    getLocalStorage() {
        return JSON.parse(localStorage.getItem("user"));
    },
    getUserToken() {
        let user = this.getLocalStorage();
        if (user && user.token) return user.token;
        else return false;
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
};

let User = {
    async registerUserMQ(userData) {
        try {
            return Service.post("users", userData);
        } catch (error) {
            let detailedError = {
                functionName: "Public - registerUserMQ",
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
                functionName: "Public - getCurrentUserProfile",
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
