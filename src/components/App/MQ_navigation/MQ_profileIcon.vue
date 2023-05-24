<template>
    <div tabindex="0" @focusout="!focus ? show = false : ''" @click="show = !show" class="flex grow md:grow-0 items-center justify-end | transition-all duration-300">
        <div class="h-12 aspect-square rounded-full bg-MQ_dark hover:bg-opacity-100 hover:border-MQ_red border-2 overflow-hidden drop-shadow-MQ | mr-2 lg:mr-8 | transition-all duration-300"
            :class="show ? 'border-MQ_red bg-opacity-100' : 'border-MQ_dark bg-opacity-10'">
            <img :class="show ? 'scale-150' : 'scale-125'" class="hover:scale-150 | transition-all duration-300 | cursor-pointer" 
                :src="readImage">
        </div>

        <div @mouseleave="focus = false" @mouseenter="focus = true" :class="show ? globalStore.userProfile.admin ? 'w-64 xs:w-80 h-64 xs:h-60' : 'w-64 xs:w-80 h-56 xs:h-60' : 'h-1 w-1 opacity-0'"
            class="mt-20 | bg-MQ_dark bg-opacity-60 hover:bg-opacity-90 | drop-shadow-md rounded-lg | overflow-hidden | transition-all duration-700 | absolute top-0 right-4">
            
            <div class="flex flex-col justify-center items-center py-4 px-8">

                <MQ_h2_small :white="true" text=" ">
                    <div class="text-MQ_red text-2xl font-bold">
                        {{ globalStore.userProfile.username }} 
                    </div>
                </MQ_h2_small>

                <div class="text-MQ_light text-xs my-2"> 
                    {{ globalStore.userProfile.email }} 
                </div>

                <div class="w-full flex flex-col xs:flex-row justify-center items-center gap-2 xs:gap-8 py-2 xs:py-4">
                    <div class="flex h-min cursor-pointer group" 
                        @click="this.$router.push({ name: 'User', params: { userName: globalStore.userProfile.username }, }).catch(() => { });">
                        <i :class="'text-MQ_red fa-solid fa-address-card mr-2 text-xl'"></i>
                        <div class="text-MQ_light text-sm h-min flex flex-col items-center">
                            <b class="group-hover:tracking-widest transition-all duration-300 whitespace-nowrap">MY PROFILE</b>
                            <span class="h-[3px] w-0 | rounded-full | group-hover:w-full group-hover:bg-MQ_red group-hover:opacity-100 opacity-50 | transition-all duration-300"></span>
                        </div>
                    </div>
                    <div v-if="globalStore.userProfile.admin" class="flex h-min cursor-pointer group"
                        @click="this.$router.push({ path: '/admin-panel' }).catch(() => { });">
                        <i :class="'text-MQ_red fa-solid fa-toolbox mr-2 text-xl'"></i>
                        <div class="text-MQ_light text-sm h-min flex flex-col items-center">
                            <b class="group-hover:tracking-widest transition-all whitespace-nowrap duration-300">ADMIN PANEL</b>
                            <span class="h-[3px] w-0 | rounded-full | group-hover:w-full group-hover:bg-MQ_red group-hover:opacity-100 opacity-50 | transition-all duration-300"></span>
                        </div>
                    </div>
                </div>

                <MQ_h2_small />
                <div class="flex grow md:grow-0 items-center justify-end | transition-all duration-300 mt-4">
                    <router-link to="" @click="LogOut()" class="px-5 py-1.5 | text-sm whitespace-nowrap | bg-transparent hover:bg-MQ_red | text-MQ_light hover:text-MQ_dark
                        hover:font-bold | border-MQ_red border-2 rounded-full | transition-all duration-300 | flex justify-center items-center cursor-pointer">
                        LOG OUT
                    </router-link>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import userIcon from "@/assets/portraits/default_user_icon.png";
import { useGlobalStore } from '@/stores/globalStore';
import MQ_h2_small from "@/components/Global/MQ_h2/MQ_h2_small.vue";
import { Auth } from "@/services"

export default {
    name: "MQ_profileIcon",
    components: { MQ_h2_small },
    data() { return {
        show: false,
        focus: false,
    } },
    setup() {
        const globalStore = useGlobalStore()
        return { globalStore, userIcon }
    },
    methods: {
        LogOut() {
            Auth.logOut();
            this.$router.push({ path: "/", replace: true }).catch(() => { });
            this.$router.go();
        }
    },
    computed: {
        readImage() {
            if (!this.globalStore.editing) {
                if (this.globalStore.userProfile.profile.image.avatar == '') return this.userIcon;
                return this.globalStore.userProfile.profile.image.avatar;
            }
            if (this.globalStore.userProfile.profile.image.avatar == '') return this.userIcon;
            else if (typeof(this.globalStore.userProfile.profile.image.avatar) == "string") return this.globalStore.userProfile.profile.image.avatar;
            let file = URL.createObjectURL(this.globalStore.userProfile.profile.image.avatar);
            return file;
        },
    }
};
</script>