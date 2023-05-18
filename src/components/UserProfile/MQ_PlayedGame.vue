<script setup>
import hiddenTrophy from '@/assets/gameCards/trophies/hidden_trophy.svg'
</script>
<template>
    <div class="flex gap-3 w-full z-10 relative" :class="game.played ? '' : 'hidden'">                   
        <!--GAME IMAGE-->
        <div class="h-44 aspect-video z-20 bg-center bg-cover rounded" :style="'background-image: url(' + game.image + ')'"></div>

        <div class="flex flex-col grow gap-3">

            <!--GAME DATA-->
            <div class="flex justify-between relative items-center">
                <div class="absolute w-full h-full bg-MQ_dark opacity-75 drop-shadow-MQ rounded -z-10"></div>
                <div class="text-xl text-MQ_lighter p-3 flex items-center">{{ game.name }}</div>

                <div class="flex flex-col gap-1 opacity-50 grow p-3 justify-center">
                    <div class="text-xs text-MQ_light text-right"> played for {{ game.timePlayed }}h</div>
                    <div class="text-xs text-MQ_light text-right"> last time played on {{ game.lastTimePlayed }}</div>
                </div>
            </div>

            <!--GAME ACHIEVEMENTS-->
            <div class="flex flex-col grow relative h-fit">
                <div class="absolute w-full h-full bg-MQ_dark opacity-75 drop-shadow-MQ rounded -z-10"></div>
                <div class="flex justify-between grow p-2">
                    <div class="text-base text-MQ_green"> Achievements 
                        <i @click="expandedTrophies = !expandedTrophies" :class="expandedTrophies ? '-scale-100' : ''" 
                            class="fa-solid fa-caret-down text-sm mb-1 cursor-pointer hover:text-MQ_light | transition-all duration-150"></i>
                    </div> 
                    <div class="text-sm text-right grow flex justify-end items-center relative h-fit gap-2">
                        Progress: {{game.trophies.reduce((count, trophy) => trophy.unlocked ? count + 1 : count, 0) }}/{{ game.trophies.length}} 
                        <div class="relative h-3 rounded-full w-32 bg-MQ_blue overflow-hidden">
                            <div v-if="game.trophies.length > 0" class="h-full bg-MQ_green" :style="'width: '+(game.trophies.reduce((count, trophy) => trophy.unlocked ? count + 1 : count, 0)/game.trophies.length)*100+'%;'"></div>
                        </div>
                    </div>
                </div>
            
                <div class="flex gap-2 pb-2 px-2 grow overflow-auto | transition-all duration-500" 
                    :class="expandedTrophies ? 'flex-col h-fit items-start' : 'flex-wrap h-full items-center'">
                    <div v-for="trophy in game.trophies" class="flex | transition-all duration-500" :class="expandedTrophies ? 'h-fit' : 'h-full aspect-square'">
                        <div :style="'background-image: url(' + (trophy.unlocked ? trophy.image : hiddenTrophy) + ')'"
                            class="aspect-square bg-center bg-cover rounded bg-MQ_dark bg-opacity-75 | border border-MQ_blue hover:border-MQ_red
                            rendering-pixelated | transition-all duration-300" :class="expandedTrophies ? 'h-32' : 'h-full'"></div>
                        <div v-if="expandedTrophies" class="flex flex-col gap-2 | transition-all duration-500">
                            <div class="text-lg pl-4 | transition-all duration-300" :class="trophy.unlocked ? 'text-MQ_green' : 'text-MQ_red'">{{ trophy.name }}</div>
                            <div v-if="trophy.unlocked" class="text-xs pl-4 text-MQ_lighter | transition-all duration-500"> 27.08.2022. </div>
                            <div class="text-xs pl-4 text-MQ_light opacity-75 | transition-all duration-500"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. 
                                Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "MQ_PlayedGame",
    props: { game: Object },
    data() { return { expandedTrophies: false } }
}
</script>