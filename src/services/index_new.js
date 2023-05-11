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
        return Service.post("auth", userData);
    },
    logOut() {
        localStorage.removeItem("user");
    },
};

let Public = {
    async getData(dataName) {
        return Service.get(`public/data/${dataName}`);
    },
};

let User = {
    async registerUserMQ(userData) {
        return Service.post("users", userData);
    },
    async getCurrentUserProfile() {
        return await Service.get("users/current/profile");
    },
};

let Admin = {
    getData(dataName) {
        return Service.get(`admin/data/${dataName}`);
    },
    async uploadImage(formData) {
        return await Service.post("admin/image", formData);
    },
    async postData(place, data) {
        return await Service.post(`admin/data/${place}`, data);
    },
    async putData(place, data) {
        return await Service.put(`admin/data/${place}`, data);
    },
    async patchData(place, data) {
        return await Service.patch(`admin/data/${place}`, data);
    },
    async deleteData(place, data) {
        return await Service.delete(`admin/data/${place}`, data);
    },
};

export { Public, User, Auth, Admin };
