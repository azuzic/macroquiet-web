<script setup>
import { useGlobalStore } from '@/stores/globalStore'
const globalStore = useGlobalStore()
</script>
<template>
    <div class="flex justify-center items-center absolute w-full h-full z-10">
        <div v-if="globalStore.style[1] == 'main-stranded' || globalStore.style[1] == 'main'" class="flex justify-center items-center">
            <img class="mr-2 xs:mr-4 | h-24 xs:h-32 sm:h-40 md:h-48 xl:h-64 | transition-all duration-300 | drop-shadow-MQ" src="@/assets/Logos/Stranded_Away_Icon.png" />
            <div class="flex flex-col justify-end | h-24 xs:h-32 sm:h-40 md:h-48 xl:h-64 | transition-all duration-300">
                <div class="text-3xl xs:text-5xl sm:text-6xl md:text-7xl xl:text-8xl | text-MQ_light p-dark drop-shadow-MQ | -mb-2 xs:-mb-1 sm:mb-0 | transition-all duration-300"> Stranded </div>
                <div class="text-3xl xs:text-5xl sm:text-6xl md:text-7xl xl:text-8xl | text-MQ_light p-dark drop-shadow-MQ | -mb-0.5 sm:mb-0 | transition-all duration-300"> Away </div>
                <div class="text-xs xs:text-base sm:text-base md:text-lg xl:text-2xl | text-MQ_light drop-shadow-MQ | transition-all duration-300"> 
                    Available now! 
                    <a href="https://macroquiet.itch.io/stranded-away" target="_blank" class="text-MQ_green hover:text-MQ_red cursor-pointer font-bold 
                        underline underline-offset-2 transition-all duration-300">
                        <i class="fa-solid fa-download drop-shadow-MQ"></i>
                    </a>
                </div>
                
            </div>
        </div>
        <div v-else-if="globalStore.style[1] == 'main-doge'" class="flex justify-center items-center">
            <div class="flex flex-col justify-center text-center | h-24 xs:h-32 sm:h-40 md:h-48 xl:h-64 | transition-all duration-300">
                <div class="text-4xl xs:text-6xl sm:text-7xl md:text-8xl xl:text-9xl | text-MQ_light EHSMB font-bold italic drop-shadow-MQ | -mb-0.5 sm:mb-0 | transition-all duration-300"> DOGE </div>
                <div class="text-xs xs:text-base sm:text-base md:text-lg xl:text-2xl | text-MQ_light drop-shadow-MQ | transition-all duration-300"> 
                    Available now! 
                    <a href="https://macroquiet.itch.io/doge" target="_blank" class="text-MQ_green hover:text-MQ_red cursor-pointer font-bold 
                        underline underline-offset-2 transition-all duration-300">
                        <i class="fa-solid fa-download drop-shadow-MQ"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MQ_carouselTitle",
}
</script>