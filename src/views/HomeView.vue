<template>  
    <div>
        <MQ_carousel/>
        <MQ_featuredGames/>
        <MQ_aboutUs/>
        <MQ_timeline/>
        <MQ_footer/>
    </div>
</template>

<script>
import MQ_carousel from '../components/HomeView/MQ_carousel/MQ_carousel.vue';
import MQ_featuredGames from '../components/HomeView/MQ_featuredGames/MQ_featuredGames.vue';
import MQ_aboutUs from '../components/HomeView/MQ_aboutUs/MQ_aboutUs.vue';
import MQ_timeline from '../components/HomeView/MQ_timeline/MQ_timeline.vue';
import MQ_footer from '@/components/App/MQ_footer.vue';

export default {
    name: "HomeView",
    components: { MQ_footer, MQ_carousel, MQ_featuredGames, MQ_aboutUs, MQ_timeline }
}
</script>