<template>
    <!--GAME ACHIEVEMENTS-->
    <MqResponsive class="flex flex-col grow relative h-fit">
        <div class="absolute w-full h-full bg-MQ_dark opacity-75 drop-shadow-MQ rounded -z-10"></div>
        <div class="flex justify-between grow p-2">
            <!--ACHIEVEMENTS-->
            <div class="text-base text-MQ_green"> Achievements 
                <i @click="expandedTrophies = !expandedTrophies" :class="expandedTrophies ? '-scale-100' : ''" 
                    class="fa-solid fa-caret-down text-sm mb-1 cursor-pointer hover:text-MQ_light | transition-all duration-150"></i>
            </div> 
            <!--TOTAL-->
            <div class="text-sm text-right grow flex justify-end items-center relative h-fit gap-2">
                {{ game.trophies.reduce((count, trophy) => trophy.unlocked ? count + 1 : count, 0) }}/{{ game.trophies.length }} 
                <div class="relative h-3 rounded-full w-32 bg-MQ_blue overflow-hidden">
                    <div v-if="game.trophies.length > 0" class="h-full bg-MQ_green" :style="'width: ' + (game.trophies.reduce((count, trophy) => trophy.unlocked ? count + 1 : count, 0) / game.trophies.length) * 100 + '%;'"></div>
                </div>
            </div>
        </div>

        <!--TROPHIES-->
        <div class="flex gap-2 pb-2 px-2 grow overflow-auto | transition-all duration-500" :class="expandedTrophies ? 'flex-col h-[408px] items-start' : 'flex-wrap h-16 items-center'">
            <MQ_Trophy v-for="trophy in game.trophies" :trophy="trophy" :expandedTrophies="expandedTrophies" />
        </div>
    </MqResponsive>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import MQ_Trophy from '@/components/UserProfile/MQ_Trophy.vue';

export default {
    name: "MQ_GameAchievements",
    components: { MqResponsive, MQ_Trophy },
    props: { game: Object },
    data() { return { expandedTrophies: false } }
}
</script>