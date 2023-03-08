<template>
    <div class="w-full h-16 bg-MQ_dark flex p-3 bg-opacity-75 absolute z-50 drop-shadow-md">
        <router-link to="/" class="h-full">
            <img class="cursor-pointer h-full ml-8" src="src/assets/Logos/macroquiet_logo.png">
        </router-link>

        <div class="flex justify-center ml-32 mt-2 items-center gap-8">
            <div v-for="link in links" :key="link.title" 
            class="flex h-min cursor-pointer group"
            @click="scroll(link.to)">
                <i :class="'text-MQ_red fa-solid fa-' + link.icon + ' mr-2 text-xl'"></i>
                <div class="text-MQ_light text-sm h-min flex flex-col items-center">
                    <b class="group-hover:tracking-widest transition-all duration-300">{{ link.title }}</b>
                    <span class="h-[3px] w-0 group-hover:w-full group-hover:bg-MQ_red rounded-full transition-all duration-300 opacity-50 group-hover:opacity-100"></span>
                </div>
            </div>
        </div>

        <div class="flex grow items-center justify-end">
            <button class="bg-transparent px-5 py-1.5 text-sm rounded-full hover:bg-MQ_red text-MQ_light hover:text-MQ_dark hover:font-bold mr-8 transition-all duration-300 border-MQ_red border-2">
                LOG IN
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "MQ_navigation",
    data() {
        return {
            links: [
                {
                    title: "OUR GAMES",
                    icon: "gamepad",
                    to: "games",
                },
                {
                    title: "ABOUT US",
                    icon: "newspaper",
                    to: "about-us",
                },
                {
                    title: "CONTACT US",
                    icon: "address-card",
                    to: "contact-us",
                },
            ],
        }
    }
};
</script>