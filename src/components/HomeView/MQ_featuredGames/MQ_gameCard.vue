<script setup>
import { useCarouselStore } from '@/stores/carouselStore'
import { useGlobalStore } from '@/stores/globalStore'
const globalStore = useGlobalStore()
const carouselStore = useCarouselStore()
</script>
 
<template>
    <div
        class="min-w-[240px] | w-[240px] h-[300px] lg:w-[300px] lg:h-[360px] xl:w-[340px] xl:h-[380px] 2xl:w-[350px] 2xl:h-[420px] | snap-center
    flex flex-col overflow-hidden | group | rounded-t-lg | bg-MQ_dark bg-opacity-75 hover:bg-opacity-60 | drop-shadow-md hover:drop-shadow-MQ | transition-all duration-500">

        <div @click="globalStore.changeStyle(game.title); carouselStore.changeStyle(game.title);" 
            class="min-h-32 lg:min-h-40 xl:min-h-44 2xl:min-h-48 flex justify-center items-center bg-center bg-size-auto_100 group-hover:bg-size-auto_110 
            border-b-[2px] border-MQ_dark group-hover:border-MQ_red | transition-all duration-500" :class="globalStore.style[3]" 
            :style="'background-image: url(' + game.image + ')'">
            <div class="w-full h-full | transition-all duration-500 | bg-gradient-to-bl from-MQ_red via-transparent to-MQ_dark opacity-25 
                bg-size-200_200 bg-pos-0 group-hover:bg-pos-100 | cursor-pointer"></div>
        </div>

        <div class="px-4 pt-2 pb-2 grow flex flex-col">
            <div class="w-full text-MQ_red text-xs"> {{ game.availability }} </div>
            <div class="text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl | w-full text-MQ_light group-hover:text-MQ_lighter 
                font-bold pt-1 uppercase transition-all duration-500">
                {{ game.title }} </div>
        </div>

        <div class="px-4 h-full flex flex-col overflow-scroll">
            <div class="text-sm | w-full text-MQ_light text-opacity-70 group-hover:text-MQ_light | text-justify grow | transition-all duration-500">
                {{ game.description }}
            </div>
        </div>

        <div class="flex justify-between pb-2 px-4">
            <a :href="game.download" target="_blank" class="text-MQ_green hover:text-MQ_red cursor-pointer font-bold text-lg 
                underline underline-offset-2 hover:underline-offset-4 hover:tracking-widest transition-all duration-300">
                <i class="fa-solid fa-download mr-2"></i>Download</a>
            <div @click="globalStore.changeStyle(game.title); carouselStore.changeStyle(game.title);" 
                class="text-MQ_light hover:text-MQ_red cursor-pointer font-bold text-xl transition-all duration-300">
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "MQ_gameCard",
    props: {
        game: Object,
    }
}
</script>