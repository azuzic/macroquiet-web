<script setup>
    import { useGlobalStore } from '@/stores/globalStore';
    const globalStore = useGlobalStore()
    globalStore.setup()
</script>

<template>
    <div class="theme-default w-full h-full bg-MQ_darkblue relative content">
        <div class="main fixed w-full h-full main-bg rendering-pixelated z-0">
            <div class="absolute w-full h-full opacity-25 bg-gradient-to-b from-MQ_red via-black to-cyan-700 z-0"></div>
            <div class="absolute w-full h-full opacity-25 bg-MQ_dark"></div>
        </div>
        <div class="min-h-full flex flex-col-reverse absolute w-full">
            <MQ_navigation/> 
            <MQ_footer/>
            <router-view class="absolute" v-slot="{ Component, route }">
                <transition name="fade">
                    <component class="absolute w-full h-full" :is="Component" :key="route.path" />
                </transition>
                <component class="relative -z-50 opacity-0" :is="Component" :key="route.path" />
            </router-view>  
        </div>
    </div>
</template>

<script>
import MQ_navigation from './components/App/MQ_navigation.vue';
import MQ_footer from '@/components/App/MQ_footer.vue';

export default {
    name: "App",
    components: { MQ_navigation, MQ_footer },
}
</script>