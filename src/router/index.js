import { createRouter, createWebHistory } from "vue-router";
import { Auth } from "@/services";
import HomeView from "@/views/HomeView.vue";
import ContactUsView from "@/views/ContactUsView.vue";
import LogInView from "@/views/LogInView.vue";
import RegisterView from "@/views/RegisterView.vue";
import RegisterWithGoogleView from "@/views/RegisterWithGoogleView.vue";
import UserProfileView from "@/views/UserProfileView.vue";
import ResetPasswordView from "@/views/ResetPasswordView.vue";
import ChangePasswordView from "@/views/ChangePasswordView.vue";
import ChangeUsernameView from "@/views/ChangeUsernameView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";
import AdminPanelView from "@/views/AdminPanelView.vue";
import PrivacyPolicyView from "@/views/PrivacyPolicyView.vue";
import DeleteProfileView from "@/views/DeleteProfileView.vue";
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
            path: "/privacy-policy",
            name: "PrivacyPolicy",
            component: PrivacyPolicyView,
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
            path: "/users/:userName",
            name: "User",
            component: UserProfileView,
            props: true,
        },
        {
            path: "/reset-password/:token(.*)",
            name: "ResetPassword",
            component: ResetPasswordView,
            props: true,
        },
        {
            path: "/change-password",
            name: "ChangePassword",
            component: ChangePasswordView,
            props: true,
        },
        {
            path: "/change-username",
            name: "ChangeUsername",
            component: ChangeUsernameView,
            props: true,
        },
        {
            path: "/delete-profile",
            name: "DeleteProfile",
            component: DeleteProfileView,
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
        "/privacy-policy",
        "/games/stranded-away",
        "/register-with-google",
        "/reset-password/enter-email",
    ];
    const passwordReset = to.path.includes("reset-password");
    const adminPages = ["admin-panel"];
    const userRequired = !publicPages.includes(to.path);
    const adminRequired = adminPages.includes(to.path);

    const globalStore = useGlobalStore();
    const userLocalStorage = Auth.getLocalStorage();
    if (userLocalStorage) globalStore.userLocalStorage = userLocalStorage;

    if (userRequired && !userLocalStorage && !passwordReset) {
        next("/login");
        return;
    } else if (adminRequired && !userLocalStorage && !userLocalStorage.admin) {
        next("/");
        return;
    } else next();
});

export default router;
