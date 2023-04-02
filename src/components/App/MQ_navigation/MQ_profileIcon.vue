<template>
    <div tabindex="0" @focusout="!focus ? show = false : ''" @click="show = true" class="flex grow md:grow-0 items-center justify-end | transition-all duration-300">
        <div class="h-12 aspect-square rounded-full bg-MQ_dark hover:bg-opacity-100 hover:border-MQ_red border-2 overflow-hidden drop-shadow-MQ | mr-2 lg:mr-8 | transition-all duration-300"
            :class="show ? 'border-MQ_red bg-opacity-100' : 'border-MQ_dark bg-opacity-10'">
            <img :class="show ? 'scale-150' : 'scale-125'" class="hover:scale-150 | transition-all duration-300 | cursor-pointer" :src="avatarImage">
        </div>
        <div @mouseleave="focus = false" @mouseenter="focus = true" :class="show ? 'h-64' : 'h-1 opacity-0'"
            class="mt-20 | bg-MQ_dark bg-opacity-75 | drop-shadow-md rounded-lg | overflow-hidden | transition-all duration-700 | absolute top-0 right-4">
            <div class="flex flex-col justify-center items-center py-4 px-8">
                <MQ_h2_small :white="true" text=" ">
                    <div class="text-MQ_red text-3xl font-bold">
                        {{ user.username }} 
                    </div>
                </MQ_h2_small>
                <div class="text-MQ_light text-sm my-2"> 
                    {{ user.email }} 
                </div>
                <div class="w-full flex justify-center gap-4 py-4">
                    <div class="flex grow md:grow-0 items-center justify-end | transition-all duration-300">
                        <router-link to="/profile" class="px-5 py-1.5 | text-sm whitespace-nowrap | bg-transparent hover:bg-MQ_red | text-MQ_light hover:text-MQ_dark
                            hover:font-bold | border-MQ_red border-2 rounded-full | transition-all duration-300">
                            MY PROFILE
                        </router-link>
                    </div>
                    <div v-if="user.admin" class="flex grow md:grow-0 items-center justify-end | transition-all duration-300">
                        <router-link to="/profile" class="px-5 py-1.5 | text-sm whitespace-nowrap | bg-transparent hover:bg-MQ_red | text-MQ_light hover:text-MQ_dark
                            hover:font-bold | border-MQ_red border-2 rounded-full | transition-all duration-300">
                            ADMIN PANEL
                        </router-link>
                    </div>
                </div>
                <MQ_h2_small />
                <div class="flex grow md:grow-0 items-center justify-end | transition-all duration-300 mt-4">
                    <router-link to="" @click="LogOut()" class="px-5 py-1.5 | text-sm whitespace-nowrap | bg-transparent hover:bg-MQ_red | text-MQ_light hover:text-MQ_dark
                        hover:font-bold | border-MQ_red border-2 rounded-full | transition-all duration-300">
                        LOG OUT
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MQ_h2_small from "../../../components/Global/MQ_h2/MQ_h2_small.vue";
import { Auth } from "@/services";
import router from "@/router";

export default {
    name: "MQ_profileIcon",
    components: { MQ_h2_small },
    props: {
        auth: Object,
        user: Object,
        avatarImage: String
    },
    data() {
        return {
            show: false,
            focus: false,
        }
    },
    methods: {
        LogOut() {
            Auth.logOut();
            router.push({ path: "/"});
            router.go()
        }
    }
};
</script>