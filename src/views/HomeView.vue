<template>  
    <MQ_carousel/>
    <MQ_featuredGames/>
    <br><br><br><br><br>
        <br><br><br><br><br>
        <br><br><br><br><br>
        <br><br><br><br><br>
        <br><br><br><br><br>
        <br><br><br><br><br>
</template>

<script>
import MQ_carousel from '../components/HomeView/MQ_carousel.vue';
import MQ_featuredGames from '../components/HomeView/MQ_featuredGames.vue';

export default {
    name: "HomeView",
    components: { MQ_carousel, MQ_featuredGames }
}
</script>