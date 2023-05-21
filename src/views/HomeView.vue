<script setup>
import { useGlobalStore } from '@/stores/globalStore'
import { useGameCardStore } from '@/stores/gameCardStore'
const gameCardStore = useGameCardStore()
const globalStore = useGlobalStore()
</script>
<template>  
    <div>
        <MQ_carousel/>
        <MQ_featuredGames/>
        <MQ_aboutUs v-if="globalStore.style[1] == 'main'"/>
        <div class="flex flex-col gap-32" v-else>
            <MQ_aboutGame :title="'ABOUT ' + gameCardStore.gamePages[globalStore.style[1]].name" :text="gameCardStore.gamePages[globalStore.style[1]].about"/>
            <MQ_aboutGame title="BACKGROUND" :text="gameCardStore.gamePages[globalStore.style[1]].background"/>
            <MQ_aboutGame title="GAMEPLAY" :text="gameCardStore.gamePages[globalStore.style[1]].gameplay"/>
        </div>
        <MQ_timeline v-if="globalStore.style[1] == 'main'"/>
        <MQ_ost v-else :title="gameCardStore.gamePages[globalStore.style[1]].ostTitle" :ost="gameCardStore.gamePages[globalStore.style[1]].ost"/>
        <MQ_footer/>
    </div>
</template>

<script>
import MQ_carousel from '@/components/HomeView/MQ_carousel/MQ_carousel.vue';
import MQ_featuredGames from '@/components/HomeView/MQ_featuredGames/MQ_featuredGames.vue';
import MQ_aboutUs from '@/components/HomeView/MQ_aboutUs/MQ_aboutUs.vue';
import MQ_timeline from '@/components/HomeView/MQ_timeline/MQ_timeline.vue';
import MQ_footer from '@/components/App/MQ_footer.vue';
import MQ_aboutGame from '../components/HomeView/MQ_aboutUs/MQ_aboutGame.vue';
import MQ_ost from '../components/HomeView/MQ_aboutUs/MQ_ost.vue';

export default {
    name: "HomeView",
    components: { MQ_footer, MQ_carousel, MQ_featuredGames, MQ_aboutUs, MQ_timeline, MQ_aboutGame, MQ_ost }
}
</script>