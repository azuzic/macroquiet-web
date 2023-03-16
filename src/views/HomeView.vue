<template>  
    <div>
        <MQ_carousel/>
        <MQ_featuredGames/>
        <MQ_aboutUs/>
        <MQ_timeline/>
    </div>
</template>

<script>
import MQ_carousel from '../components/HomeView/MQ_carousel/MQ_carousel.vue';
import MQ_featuredGames from '../components/HomeView/MQ_featuredGames/MQ_featuredGames.vue';
import MQ_aboutUs from '../components/HomeView/MQ_aboutUs/MQ_aboutUs.vue';
import MQ_timeline from '../components/HomeView/MQ_timeline/MQ_timeline.vue';

export default {
    name: "HomeView",
    components: { MQ_carousel, MQ_featuredGames, MQ_aboutUs, MQ_timeline }
}
//
</script>

