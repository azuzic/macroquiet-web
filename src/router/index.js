import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactUsView from "../views/ContactUsView.vue";
import LogIn from "../views/LogIn.vue";
import Register from "../views/Register.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView,
        },
        {
            path: "/contact-us",
            name: "ContactUs",
            component: ContactUsView,
        },
        {
            path: "/log-in",
            name: "LogIn",
            component: LogIn,
        },
        {
            path: "/register",
            name: "Register",
            component: Register,
        },
    ],
});
export default router;
