<template>
    <div class="h-[200px] xs:h-[280px] sm:h-[340px] md:h-[420px] lg:h-[600px] | overflow-hidden relative | transition-all duration-300">
        <MQ_carouselTitle class="mt-8 sm:mt-7 lg:mt-0 | transition-all duration-300"/>
        <carousel :items-to-show="1" :wrapAround="true" :autoplay="0" :transition="1000" :mouseDrag="false" :touchDrag="false" class="h-full relative">
            <slide v-for="slide in 1" :key="slide" class="h-full">
                <div class="h-full w-full overflow-hidden bg-cover" :style="'background-image: url(src/assets/tempImages/' + (slide + 15) + '.png)'">
                    <div class="w-full h-full bg-gradient-to-b from-MQ_dark opacity-25 absolute top-0"></div>
                </div>
            </slide>
        </carousel>
    </div>
    
    <div class="border-2 border-MQ_light MQ_shadow"></div>

</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import MQ_carouselTitle from '../HomeView/MQ_carouselTitle.vue'

export default {
    name: 'MQ_Carousel',
    components: {
        Carousel,
        Slide,
        MQ_carouselTitle
    },
}
</script>

<style lang="scss">
.MQ_shadow {
    filter: drop-shadow(0px 2px 4px black);
}
.carousel__viewport, .carousel__track {
    height: 100%;
}
</style>