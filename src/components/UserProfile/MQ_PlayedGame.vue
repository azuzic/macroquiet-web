<script setup>
import { useGlobalStore } from '@/stores/globalStore'
import { useCarouselStore } from '@/stores/carouselStore'
import { images } from "@/stores/images.js";
const globalStore = useGlobalStore()
const carouselStore = useCarouselStore()
</script>
<template> 
    <div class="flex flex-col gap-3 w-full z-10">
        <div class="flex flex-row gap-3 w-full z-10 relative">                   
            <!--GAME IMAGE-->
            <div @click="globalStore.changeStyle(game.name); carouselStore.changeStyle(game.name); $router.push('/')" 
                class="w-full md2:w-auto sm:h-44 aspect-video z-20 bg-center bg-cover rounded cursor-pointer 
                border-3 border-MQ_red border-opacity-0 hover:border-opacity-100 transition-all duration-300 hover:brightness-90" 
                :style="'background-image: url(' + images.GameCard['CARD_'+game.name.toUpperCase().replace(/ /g,'')] + ')'"></div>

            <div class="flex flex-col grow gap-3">

                <!--GAME DATA-->
                <div class="flex grow flex-col md2:flex-row justify-between items-start relative md2:items-center">
                    <div class="absolute w-full h-full bg-MQ_dark opacity-75 drop-shadow-MQ rounded -z-10"></div>
                    <div class="text-xl text-MQ_lighter p-3 flex items-center">{{ game.name }}</div>

                    <div class="flex flex-col gap-1 opacity-60 md2:grow p-3 justify-center whitespace-nowrap">
                        <div class="text-xs text-MQ_light md2:text-right"> played for <b class="text-MQ_red">{{ timePlayed(game.score.timePlayed) }}</b></div>
                        <div class="text-xs text-MQ_light md2:text-right"> last time played on <b class="text-MQ_red">{{ convertUnixTime(game.score.lastTimePlayed) }}</b></div>
                    </div>
                </div>

                <MQ_GameAchievements target="md2+" :game="game"/>

            </div>
        </div>

        <MQ_GameAchievements target="md-" :game="game"/>
    </div>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import MQ_GameAchievements from "@/components/UserProfile/MQ_GameAchievements.vue";
export default {
    name: "MQ_PlayedGame",
    components: { MqResponsive, MQ_GameAchievements },
    props: { game: Object },
    data() { return { expandedTrophies: false } },
    methods: {
        convertUnixTime(unixTime) {
            const months = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
            
            const date = new Date(unixTime * 1000);
            const day = date.getDate();
            const month = months[date.getMonth()];
            const year = date.getFullYear();
            
            return `${day} ${month}, ${year}`;
        },
        timePlayed(e) {
            let s = Math.floor(e % 60).toString();
            let m = Math.floor(e % 3600 / 60).toString();
            let h = Math.floor(e / 3600).toString();
            let d = h>23 ?  Math.floor(h / 24).toString() : 0;
            h = h%24;

            return e>0 ? ((d>0 ? d==1 ? d + ' day ' : d+ ' days ' : '') + (h>0 ? h==1 ? h + ' hour ' : h + ' hours ' : '') + (m>0 ? m==1 ? m + ' minute ' : m + ' minutes ' : '') + (s>0 ? s==1 ? s + ' second ' : s + ' seconds ' : '')) : 'none';
        }
    }
}
</script>