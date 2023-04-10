import { createRouter, createWebHistory } from "vue-router";
import { Auth } from "@/services";
import HomeView from "../views/HomeView.vue";
import ContactUsView from "../views/ContactUsView.vue";
import LogIn from "../views/LogInView.vue";
import Register from "../views/RegisterView.vue";
import UserProfileView from "../views/UserProfileView.vue";
import PageNotFound from "../views/PageNotFoundView.vue";
import AdminPanel from "../views/AdminPanelView.vue";
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
            path: "/login",
            name: "LogIn",
            component: LogIn,
        },
        {
            path: "/register",
            name: "Register",
            component: Register,
        },
        {
            path: "/admin-panel",
            name: "AdminPanel",
            component: AdminPanel,
        },
        {
            path: "/user/:userName",
            name: "User",
            component: UserProfileView,
            props: true,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: PageNotFound,
        },
    ],
});

router.beforeEach((to, from, next) => {
    const publicPages = [
        "/",
        "/login",
        "/register",
        "/contact-us",
        "/games/doge",
        "/games/stranded-away",
    ];
    const adminPages = ["admin-panel"];
    const userRequired = !publicPages.includes(to.path);
    const adminRequired = adminPages.includes(to.path);

    const user = Auth.getCurrentUser();

    if (userRequired && !user) {
        console.log("sdsd");
        next("/login");
        return;
    } else if (adminRequired && !user && !user.admin) {
        next("/");
        return;
    } else next();
});

export default router;
