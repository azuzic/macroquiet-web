<template>
    <div class="flex flex-col gap-3 w-full z-10" :class="game.played ? '' : 'hidden'">
        <div class="flex flex-row gap-3 w-full z-10 relative">                   
            <!--GAME IMAGE-->
            <div class="w-full md2:w-auto sm:h-44 aspect-video z-20 bg-center bg-cover rounded" :style="'background-image: url(' + game.image + ')'"></div>

            <div class="flex flex-col grow gap-3">

                <!--GAME DATA-->
                <div class="flex grow flex-col md2:flex-row justify-between items-start relative md2:items-center">
                    <div class="absolute w-full h-full bg-MQ_dark opacity-75 drop-shadow-MQ rounded -z-10"></div>
                    <div class="text-xl text-MQ_lighter p-3 flex items-center">{{ game.name }}</div>

                    <div class="flex flex-col gap-1 opacity-50 md2:grow p-3 justify-center whitespace-nowrap">
                        <div class="text-xs text-MQ_light md2:text-right"> played for {{ game.timePlayed }}h</div>
                        <div class="text-xs text-MQ_light md2:text-right"> last time played on {{ game.lastTimePlayed }}</div>
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
    data() { return { expandedTrophies: false } }
}
</script>