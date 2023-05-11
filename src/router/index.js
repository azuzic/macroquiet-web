import { createRouter, createWebHistory } from "vue-router";
import { Auth } from "@/services";
import HomeView from "@/views/HomeView.vue";
import ContactUsView from "@/views/ContactUsView.vue";
import LogInView from "@/views/LogInView.vue";
import RegisterView from "@/views/RegisterView.vue";
import RegisterWithGoogleView from "@/views/RegisterWithGoogleView.vue";
import UserProfileView from "@/views/UserProfileView.vue";
import ResetPasswordView from "@/views/ResetPasswordView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";
import AdminPanelView from "@/views/AdminPanelView.vue";
import { useGlobalStore } from "@/stores/globalStore";

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
            component: LogInView,
        },
        {
            path: "/register",
            name: "Register",
            component: RegisterView,
        },
        {
            path: "/register-with-google",
            name: "RegisterWithGoogle",
            component: RegisterWithGoogleView,
        },
        {
            path: "/admin-panel",
            name: "AdminPanel",
            component: AdminPanelView,
        },
        {
            path: "/user/:userName",
            name: "User",
            component: UserProfileView,
            props: true,
        },
        {
            path: "/reset-password/:token",
            name: "ResetPassword",
            component: ResetPasswordView,
            props: true,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: PageNotFoundView,
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
        "/register-with-google",
    ];
    const adminPages = ["admin-panel"];
    const userRequired = !publicPages.includes(to.path);
    const adminRequired = adminPages.includes(to.path);

    const globalStore = useGlobalStore();
    const userLocalStorage = Auth.getLocalStorage();
    if (userLocalStorage) globalStore.userLocalStorage = userLocalStorage;

    if (userRequired && !userLocalStorage) {
        next("/login");
        return;
    } else if (adminRequired && !userLocalStorage && !userLocalStorage.admin) {
        next("/");
        return;
    } else next();
});

export default router;
