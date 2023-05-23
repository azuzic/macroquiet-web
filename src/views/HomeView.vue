<script setup>
import { useGlobalStore } from '@/stores/globalStore'
import { useGameStore } from '@/stores/gameStore'
const gameStore = useGameStore()
const globalStore = useGlobalStore()
</script>
<template>  
    <div>
        <MQ_carousel/>
        <MQ_featuredGames/>
        <MQ_aboutUs v-if="globalStore.style[1] == 'main'"/>
        <MQ_aboutGame v-else v-for="g in gameStore.gamePages[globalStore.style[1]]" :game="g"/>
        <MQ_timeline v-if="globalStore.style[1] == 'main'"/>
        <MQ_footer/>
    </div>
</template>

<script>
import MQ_carousel from '@/components/HomeView/MQ_carousel/MQ_carousel.vue';
import MQ_featuredGames from '@/components/HomeView/MQ_featuredGames/MQ_featuredGames.vue';
import MQ_aboutUs from '@/components/HomeView/MQ_aboutUs/MQ_aboutUs.vue';
import MQ_aboutGame from '@/components/HomeView/MQ_aboutGame/MQ_aboutGame.vue';
import MQ_timeline from '@/components/HomeView/MQ_timeline/MQ_timeline.vue';
import MQ_footer from '@/components/App/MQ_footer.vue';

export default {
    name: "HomeView",
    components: { MQ_footer, MQ_carousel, MQ_featuredGames, MQ_aboutUs, MQ_timeline, MQ_aboutGame }
}
</script>