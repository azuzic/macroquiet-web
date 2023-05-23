<script setup>
import { useGameStore } from '@/stores/gameStore'
const gameStore = useGameStore()
</script>

<template>
    <div id="games" class="pb-8 relative">

        <MQ_h2 text="FEATURED GAMES"/>
        <div class="snap-x snap-mandatory flex w-0 min-w-full grow lg:flex-wrap | md:justify-center | overflow-x-auto text-MQ_light | px-16 lg:px-4 py-4 -mt-4 | gap-3 lg:gap-6 2xl:gap-8 | transition-all duration-300">
            <MQ_gameCard v-for="g, id in gameStore.gameCards" :game="g"
            :class="id==0 ? 'snap-start' : id-1== gameStore.gameCards.length ? 'snap-end' : 'snap-center'"/>
        </div>

    </div>
</template>
<script>
import MQ_gameCard from "./MQ_gameCard.vue"
import MQ_h2 from "@/components/Global/MQ_h2/MQ_h2.vue";
export default {
    name: "MQ_featuredGames",
    components: { MQ_gameCard, MQ_h2 },
}
</script>