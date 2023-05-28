<script setup>
import { useGlobalStore } from '@/stores/globalStore'
const globalStore = useGlobalStore()
</script>
<template>
    <div class="fixed w-full h-full rendering-pixelated z-0 | transition-all duration-500 main-stranded" 
        :class="globalStore.style[1]=='main-stranded' ? 'opacity-100' : 'opacity-0'">
        <div class="absolute w-full h-full opacity-25 bg-gradient-to-b from-MQ_red via-black to-cyan-700 z-0"></div>
        <div class="absolute w-full h-full opacity-25 | transition-all duration-500" :class="globalStore.style[2]"></div>
    </div>
    <div class="fixed w-full h-full rendering-pixelated z-0 | transition-all duration-500 main" 
        :class="globalStore.style[1]=='main' ? 'opacity-100' : 'opacity-0'">
        <div class="absolute w-full h-full opacity-25 bg-gradient-to-b from-MQ_red via-black to-cyan-700 z-0"></div>
        <div class="absolute w-full h-full opacity-25 | transition-all duration-500" :class="globalStore.style[2]"></div>
    </div>
    <div class="fixed w-full h-full rendering-pixelated z-0 | transition-all duration-500 main-doge" 
        :class="globalStore.style[1]=='main-doge' ? 'opacity-100' : 'opacity-0'">
        <div class="absolute w-full h-full opacity-25 bg-gradient-to-b from-MQ_red via-black to-cyan-700 z-0"></div>
        <div class="absolute w-full h-full opacity-25 | transition-all duration-500" :class="globalStore.style[2]"></div>
    </div>
</template>

<script>
export default {
    name: "MQ_bg",
}
</script>