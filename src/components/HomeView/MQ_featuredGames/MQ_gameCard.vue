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

        <div @click="globalStore.changeStyle(title); carouselStore.changeStyle(title);" class="min-h-32 lg:min-h-40 xl:min-h-44 2xl:min-h-48 flex justify-center items-center bg-center bg-size-auto_100 group-hover:bg-size-auto_110 
        border-b-[2px] border-MQ_dark group-hover:border-MQ_red | transition-all duration-500"
            :class="globalStore.style[3]" :style="'background-image: url(' + image + ')'">
            <div
                class="w-full h-full | transition-all duration-500 | bg-gradient-to-bl from-MQ_red via-transparent to-MQ_dark opacity-25 | bg-size-200_200 bg-pos-0 group-hover:bg-pos-100 | cursor-pointer">
            </div>
        </div>

        <div class="px-4 pt-2 pb-4 grow flex flex-col">
            <div class="w-full text-MQ_red text-xs"> {{ availability }} </div>
            <div
                class="text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl | w-full text-MQ_light group-hover:text-MQ_lighter font-bold pt-1 uppercase | transition-all duration-500">
                {{ title }} </div>
        </div>

        <div class="px-4 h-full flex flex-col overflow-scroll">
            <div
                class="text-sm | w-full text-MQ_light text-opacity-70 group-hover:text-MQ_light | text-justify grow | transition-all duration-500">
                {{ description }}
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "MQ_gameCard",
    props: {
        availability: String,
        title: String,
        description: String,
        image: String,
        link: String,
    }
}
</script>