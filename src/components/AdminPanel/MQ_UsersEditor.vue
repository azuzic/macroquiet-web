<template>
    <div class="flex flex-col w-full p-4 gap-4">
        <div class="w-full text-center px-8">
            <MQ_h2_small :white="true" text=" ">
                <p class="text-base sm:text-lg md:text-xl text-MQ_light">Current Users</p>
                <p class="text-xs text-MQ_red">Click user to open profile</p>
            </MQ_h2_small>
            <div class="w-full flex flex-col gap-1">
                <div v-for="(user, i) in allUsers" class="flex flex-col text-MQ_light justify-center items-start">
                    <div class="flex text-MQ_light justify-start items-center">

                        <img class="h-6 md:h-7 aspect-square rounded-full mr-1" :src="user.register_method == 'MacroQuiet' ? macroQuietIcon : googleIcon">

                        <div class="text-MQ_light font-bold text-lg md:text-2xl w-8 md:w-12 text-right mr-2 md:mr-4">{{ i + 1 + "." }}</div>
                        <img class="h-6 md:h-8 aspect-square rounded-full mr-1 md:mr-6" :src="user.profile.image.avatar != '' ? user.profile.image.avatar : defaultUserIcon" alt=""> 
 
                        <RouterLink :to="'/users/'+ user.username">
                            <div class="text-MQ_red text-sm md:text-xl font-bold hover:underline cursor-pointer w-48 text-left"> {{ user.username }} </div> 
                        </RouterLink>
                        
                    </div>
                    <hr class="border-t-[1px] border-MQ_light border-opacity-25 relative z-10 w-full mt-1"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MQ_h2_small from "@/components/Global/MQ_h2/MQ_h2_small.vue";
import defaultUserIcon from "@/assets/portraits/default_user_icon.png";
import macroQuietIcon from "@/assets/Logos/macroquiet_logo_icon.png";
import googleIcon from "@/assets/icons/logIn/google.svg";
import { Admin } from "@/services";
import { useGlobalStore } from '@/stores/globalStore';
import { useCarouselStore } from '@/stores/carouselStore';

export default {
    name: "MQ_UsersEditor",
    components: { MQ_h2_small },
    data() { return { allUsers: "", } },
    setup() { 
        const globalStore = useGlobalStore();
        const carouselStore = useCarouselStore();
        return { defaultUserIcon, macroQuietIcon, googleIcon, globalStore, carouselStore } },
    async mounted() {
        this.allUsers = await Admin.getData("users?=");
        this.allUsers = this.allUsers.data;
    },  
}
</script>