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
        <div class="flex grow md:grow-0 items-center justify-end | transition-all duration-300">
            <button class="px-5 py-1.5 | mr-2 lg:mr-8 | text-sm whitespace-nowrap | bg-transparent hover:bg-MQ_red | text-MQ_light hover:text-MQ_dark | hover:font-bold | border-MQ_red border-2 rounded-full | transition-all duration-300">
                LOG IN
            </button>
        </div>

    </div>
</template>

<script>
import MQ_logo from "./MQ_logo.vue";
let wait = function (seconds) {
    return new Promise((resolveFn) => {
        setTimeout(resolveFn, seconds * 1000);
    });
};
export default {
    name: "MQ_navigationTop",
    components: {
        MQ_logo
    },
    props: {
        links: Array,
    },
    methods: {
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