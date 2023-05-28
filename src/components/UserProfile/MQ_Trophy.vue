<script setup>
import hiddenTrophyDefault from '@/assets/games/trophies/hidden_trophy.svg'
import hiddenTrophyDoge from '@/assets/games/trophies/hidden_trophy_doge.svg'
import { useGlobalStore } from '@/stores/globalStore'
import { images } from "@/stores/images.js";
const hiddenTrophy = { "main" : hiddenTrophyDefault, "main-doge" : hiddenTrophyDoge, "main-stranded" : hiddenTrophyDefault};
const globalStore = useGlobalStore()
</script> 
<template>
    <div class="flex | transition-all duration-500" :class="expandedTrophies ? 'h-fit' : 'h-14 aspect-square'">
        <!--IMAGE-->
        <div :style="'background-image: url(' + (trophy.unlocked ? images.GameTrophy[gameName][trophy.spriteName.replace(/, /g,'').replace(/ /g,'')] : hiddenTrophy[globalStore.style[1]]) + ')'"
            class="aspect-square bg-center bg-cover rounded bg-MQ_dark bg-opacity-75 | border border-MQ_blue
            rendering-pixelated | transition-all duration-300 relative" :class="[expandedTrophies ? 'h-32' : 'h-14']">
        </div>
        <!--DATA-->
        <div v-if="expandedTrophies" class="flex flex-col gap-2 | transition-all duration-500 h-32">
            <div class="text-lg pl-4 | transition-all duration-300" :class="trophy.unlocked ? 'text-MQ_green' : 'text-MQ_red'">{{ trophy.trophieName }}</div>
            <div v-if="trophy.unlocked" class="text-xs pl-4 text-MQ_lighter | transition-all duration-500"> {{ convertUnixTime(trophy.date) }} </div>
            <div class="text-xs pl-4 text-MQ_light | transition-all duration-500 overflow-auto h-full"> 
                <div class="opacity-60">{{ trophy.trophieDescription }}</div>
                <div class="flex" v-if="trophy.progressText">
                    <div class="text-MQ_light">{{ trophy.progressText }} </div>
                    <div class="ml-1 text-MQ_red">{{ trophy.progress.toString() }}</div> 
                    <div class="ml-1" v-if="trophy.goal"> / <span class="text-MQ_green">{{ trophy.goal }}</span> </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MQ_Tooltip from '@/components/Global/MQ_Tooltip.vue';
export default {
    name: "MQ_Trophy",
    props: { trophy: Object, expandedTrophies: Boolean, gameName: String },
    components: { MQ_Tooltip },
    methods: {
        convertUnixTime(unixTime) {
            if (unixTime == 0) return '';
            const months = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
            
            const date = new Date(unixTime * 1000);
            const day = date.getDate();
            const month = months[date.getMonth()];
            const year = date.getFullYear();
            
            return `${day} ${month}, ${year}`;
        }
    }
}
</script>