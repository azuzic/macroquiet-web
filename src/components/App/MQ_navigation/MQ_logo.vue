<script setup>
import { useGlobalStore } from '@/stores/globalStore'
import { useCarouselStore } from '@/stores/carouselStore'
const carouselStore = useCarouselStore()
const globalStore = useGlobalStore()
</script>
<template>
    <router-link @click="globalStore.changeStyle('default'); carouselStore.changeStyle('default');" 
        to="/" class="h-full shrink flex justify-center items-center group | waviy">
        <img class="cursor-pointer aspect-square h-full min-w-fit | ml-6 lg:ml-8 | group-hover:rotate-180 | transition-all duration-1000" src="@/assets/Logos/macroquiet_logo_icon.png">
        <div class="logo_font pt-1 pl-2 | transition-all duration-300">
            <div class="text-2xl font-bold tracking-wide flex | transition-all duration-300"> 
                <span class="text-MQ_light" style="--i:1">M</span>
                <span class="text-MQ_light" style="--i:2">a</span>
                <span class="text-MQ_light" style="--i:3">c</span>
                <span class="text-MQ_light" style="--i:4">r</span>
                <span class="text-MQ_light" style="--i:5">o</span>
                <span class="text-MQ_red" style="--i:6">Q</span>
                <span class="text-MQ_red" style="--i:7">u</span>
                <span class="text-MQ_red" style="--i:8">i</span>
                <span class="text-MQ_red" style="--i:9">e</span>
                <span class="text-MQ_red" style="--i:10">t</span>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "MQ_logo",
};
</script>

<style lang="scss" scoped>
.waviy:hover span {
  position: relative;
  animation: waviy 1s 1; 
  animation-delay: calc(.05s * var(--i));
}
@keyframes waviy {
  0%,40%,100% {
    transform: translateY(0)
  }
  20% {
    transform: translateY(-8px)
  }
}
</style>