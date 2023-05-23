<template>
    <MQ_text v-if="game.type == 'text'" :title="game.title" :text="game.text"/>
    <MQ_videoList v-if="game.type == 'videoList'" :title="game.title" :videos="game.videos"/>
</template>

<script>
import MQ_text from "@/components/HomeView/MQ_aboutGame/MQ_text.vue"
import MQ_videoList from "@/components/HomeView/MQ_aboutGame/MQ_videoList.vue"
export default {
    name: "MQ_aboutGame",
    components: { MQ_text, MQ_videoList },
    props: { game: Object},
}
</script>