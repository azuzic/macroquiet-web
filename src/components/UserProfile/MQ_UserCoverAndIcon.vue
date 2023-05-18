<script setup>
import userCover from '@/assets/background/userCover.jpg'
import userIcon from '@/assets/portraits/default_user_icon.png'
import { useGlobalStore } from '@/stores/globalStore';
const globalStore = useGlobalStore()
</script>

<template>
    <div class="bg-center bg-cover h-[240px] xs:h-[280px] sm:h-[340px] md:h-[400px] | overflow-hidden relative | transition-all duration-300
        w-full px-96 | flex justify-between items-end" :style="'background-image: url(' + userCover + ');'">
        <div class="p-4 flex justify-center items-start">
            <div class="w-32 aspect-square border border-MQ_blue rounded bg-cover bg-center" :style="'background-image: url(' + userIcon + ');'"></div>
            
            <!--USERNAME-->
            <div class="flex flex-col items-start pl-4 gap-4">
                <div class="text-2xl text-MQ_red flex justify-center items-end gap-2"> 
                    {{ globalStore.userProfile.username }} 
                    <i @click="showPreviousUsername = !showPreviousUsername" :class="showPreviousUsername ? '-scale-100' : ''"
                        class="fa-solid fa-caret-down text-sm mb-1 cursor-pointer hover:text-MQ_light relative peer">
                        <div @mouseleave ="showPreviousUsername = false" v-if="showPreviousUsername" 
                            class="absolute right-4 z-50 w-fit h-fit bg-MQ_dark border-[1px] border-slate-600 p-2 rounded-md gap-1 flex flex-col
                                text-MQ_light font-normal cursor-default -scale-100 text-xs">
                            <div class="whitespace-nowrap underline text-sm"> Previous usernames: </div>
                            <div v-for="u in globalStore.userProfile.former_usernames">{{u}}</div>
                        </div>
                    </i>
                </div>
                <div class="text-MQ_light text-sm"> 
                    {{ globalStore.userProfile.profile.description }}
                </div>
            </div>
    
        </div>

        <div class="px-5 py-1.5 mr-4 mb-4 | text-sm whitespace-nowrap | bg-transparent hover:bg-MQ_red | text-MQ_light hover:text-MQ_dark
            hover:font-bold | border-MQ_red border-2 rounded | transition-all duration-300 cursor-pointer">
            Edit Profile
        </div>
    </div>
</template>

<script>
export default {
    name: "MQ_UserCoverAndIcon",  
    data() { return { showPreviousUsername: false } }
}
</script>