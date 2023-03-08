<template>
    <div class="mb-8">
        <h2 id="games" class="text-5xl text-MQ_lighter font-bold my-12 v-container text-center"> FEATURED GAMES </h2>
        <div class="flex flex-wrap justify-center text-MQ_light gap-8">
            <MQ_gameCard image="src/assets/gameCards/dogeGameCard.png"/>
            <MQ_gameCard image="src/assets/gameCards/strandedAwayGameCard.png"/>
        </div>
    </div>
</template>
<script>
import MQ_gameCard from "../App/MQ_gameCard.vue"
export default {
    name: "MQ_featuredGames",
    components: {
        MQ_gameCard
    }
}
</script>