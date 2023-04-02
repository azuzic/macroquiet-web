<template>
    <div class="w-full h-16 bg-MQ_dark flex p-3 bg-opacity-75 fixed top-0 z-[1000] drop-shadow-md">

        <MQ_logo />

        <!-- TOP LINKS -->
        <div class="flex overflow-hidden | pt-0 md2:pt-2 ml-12 lg:ml-32 | items-center | gap-4 lg:gap-8 | md:grow h-0 md2:h-full | transition-all duration-300">
            <div v-for="link in links" :key="link.title"
            class="flex h-min cursor-pointer group"
            @click="scroll(link.to)">
                <i :class="'text-MQ_red fa-solid fa-' + link.icon + ' mr-2 text-xl'"></i>
                <div class="text-MQ_light text-sm h-min flex flex-col items-center">
                    <b class="group-hover:tracking-widest transition-all duration-300">{{ link.title }}</b>
                    <span class="h-[3px] w-0 | rounded-full | group-hover:w-full group-hover:bg-MQ_red group-hover:opacity-100 opacity-50 | transition-all duration-300"></span>
                </div>
            </div>
        </div>

        <!-- LOG IN -->
        <div v-if="!auth.authenticated" class="flex grow md:grow-0 items-center justify-end | transition-all duration-300">
            <router-link to="/login" class="px-5 py-1.5 | mr-2 lg:mr-8 | text-sm whitespace-nowrap | bg-transparent hover:bg-MQ_red | text-MQ_light hover:text-MQ_dark | hover:font-bold | border-MQ_red border-2 rounded-full | transition-all duration-300">
                LOG IN
            </router-link>
        </div>
        <MQ_profileIcon v-else :auth="auth" :user="user" :avatarImage="avatarImage" />

    </div>
</template>

<script>
import MQ_logo from "./MQ_logo.vue";
import { Auth } from "@/services";
import MQ_profileIcon from "./MQ_profileIcon.vue";
let wait = function (seconds) {
    return new Promise((resolveFn) => {
        setTimeout(resolveFn, seconds * 1000);
    });
};
export default {
    name: "MQ_navigationTop",
    components: { MQ_logo, MQ_profileIcon },
    props: { links: Array },
    data() {
        return {
            scrollPosition: 0,

            auth: Auth.state,
            user: {
                username: "",
                email: "",
                admin: false,
            },
            avatarImage: "",
        }
    }, 
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    async mounted() {
        await this.getUserDetails();
        await this.setUserAvatar();
    },
    methods: {
        handleScroll() {
            this.scrollPosition = window.scrollY;
        },
        async getUserDetails() {
            if (this.auth.authenticated) {
                let userData = Auth.getCurrentUserData();
                let result = await Auth.getUserDetails(userData.username);
                this.user = result.data.userData;
            }
        },
        async setUserAvatar() {
            await this.getUserDetails();
            if (this.user.username) {
                let result = await Auth.getImage(this.user.profile.avatarImageID);
                this.avatarImage = result ? result.data.img : "";
            }
        },
        async scroll(id) {
            if (id == "contact-us") {
                this.$router.push({ path: "/contact-us" }).catch(() => { });
                return;
            }
            if (this.$route.name != "Home") {
                this.$router.push({ path: "/", replace: true }).catch(() => { });
                await wait(0.1);
            }

            if (id == null) return;

            try {
                document.getElementById(id).scrollIntoView({
                    behavior: "smooth",
                });
                this.drawer = false;
            } catch (e) { }
        },
    }
};
</script>