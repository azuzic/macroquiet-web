<template>
    <div class="fixed h-full z-50 flex flex-col justify-center | md2:-ml-16 | transition-all duration-300">
        <div class="flex flex-col">
            <div v-for="link, index in links" :key="link.title" @click="scroll(link.to)"
                class="h-min cursor-pointer group | transition-all duration-300">
                <div class="text-MQ_light text-sm h-min flex">

                    <div class="flex flex-col justify-center | group-hover:tracking-widest | group-hover:w-28 w-0 | whitespace-nowrap text-center overflow-hidden | bg-MQ_dark bg-opacity-75 drop-shadow-md | -mr-2 | transition-all duration-300">  
                        <span class="transition-all duration-50 pl-2 flex justify-center">
                            <div class="w-fit flex flex-col">
                                <div>{{ link.title }}</div>
                                <span class="h-[3px] | bg-MQ_red rounded-full | w-0 group-hover:w-full | opacity-0 group-hover:opacity-100 | transition-all duration-300"></span>
                            </div>
                        </span>
                    </div>

                    <i v-if="index == 0" :class="'text-MQ_red fa-solid fa-' + link.icon"
                        class="text-2xl | bg-MQ_dark bg-opacity-75 drop-shadow-md | mx-2 p-2 w-12 rounded-tr-3xl | group-hover:rounded-br-md | transition-all duration-300"></i>
                    <i v-else-if="index == links.length-1"  :class="'text-MQ_red fa-solid fa-' + link.icon"
                        class="text-2xl | bg-MQ_dark bg-opacity-75 drop-shadow-md | mx-2 p-2 w-12 rounded-br-3xl | group-hover:rounded-tr-md | transition-all duration-300"></i>
                    <i v-else="index == links.length - 1"  :class="'text-MQ_red fa-solid fa-' + link.icon"
                        class="text-2xl | bg-MQ_dark bg-opacity-75 drop-shadow-md | mx-2 p-2 w-12 | group-hover:rounded-r-md | transition-all duration-300"></i>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MQ_navigationSide",
    props: {
        links: Array,
    },
    methods: {
        async scroll(id) {
            if (id == "contact-us") {
                router.push({ path: "/contact-us" }).catch(() => { });
                return;
            }
            if (this.$route.name != "Home") {
                router.push({ path: "/", replace: true }).catch(() => { });
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