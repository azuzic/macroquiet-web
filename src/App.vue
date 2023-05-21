<script setup>
import { useCarouselStore } from '@/stores/carouselStore'
import { useTimelineStore } from '@/stores/timelineStore'
import { useGlobalStore } from '@/stores/globalStore'

const carouselStore = useCarouselStore()
const globalStore = useGlobalStore()
const timelineStore = useTimelineStore()

carouselStore.setup()
timelineStore.setup()
globalStore.setup()
</script>

<template>
    <div class="w-full h-full bg-MQ_darkblue relative | transition-all duration-300" :class="globalStore.style[0]">
        <div class="fixed w-full h-full rendering-pixelated z-0 | transition-all duration-500" :class="globalStore.style[1]">
            <div class="absolute w-full h-full opacity-25 bg-gradient-to-b from-MQ_red via-black to-cyan-700 z-0"></div>
            <div class="absolute w-full h-full opacity-25 | transition-all duration-500" :class="globalStore.style[2]"></div>
        </div>
        <div class="min-h-full flex flex-col-reverse absolute w-full">
            <MQ_navigation />
            <router-view class="" v-slot="{ Component, route }">
                <transition name="fade">
                    <component class="absolute w-full h-full" :is="Component" :key="route.path" />
                </transition>
            </router-view>
        </div>
    </div>
</template>

<script>
import MQ_navigation from './components/App/MQ_navigation.vue';

export default {
    name: "App",
    components: { MQ_navigation },
}
</script>