<template>
    <div class="w-full h-16 bg-MQ_dark flex p-3 bg-opacity-75 fixed z-40 drop-shadow-md">
        <router-link to="/" class="h-full shrink">
            <img class="cursor-pointer h-full min-w-fit | ml-2 lg:ml-8 | transition-all duration-300" src="src/assets/Logos/macroquiet_logo.png">
        </router-link>

        <div class="flex overflow-hidden | pt-0 md:pt-2 ml-12 lg:ml-32 | items-center | gap-4 lg:gap-8 | md:grow h-0 md:h-full | transition-all duration-300">
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

        <div class="flex grow md:grow-0 items-center justify-end | transition-all duration-300">
            <button class="px-5 py-1.5 | mr-2 lg:mr-8 | text-sm whitespace-nowrap | bg-transparent hover:bg-MQ_red | text-MQ_light hover:text-MQ_dark | hover:font-bold | border-MQ_red border-2 rounded-full | transition-all duration-300">
                LOG IN
            </button>
        </div>
    </div>

    <div class="fixed h-full z-50 flex flex-col justify-center | md:-ml-16 | transition-all duration-300">
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
import { MqResponsive } from "vue3-mq";
export default {
    name: "MQ_navigation",
    components: { MqResponsive },
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