<template>
    <carousel :items-to-show="1" :wrapAround="true" :autoplay="10000" :transition="1000" :mouseDrag="false" :touchDrag="false">
        <slide v-for="slide in 2" :key="slide">
            <div class="h-[600px] overflow-hidden">
                <img :src="'src/assets/tempImages/' + (slide + 15) + '.png'" alt="">
                <div class="w-full h-full bg-gradient-to-b from-MQ_dark opacity-25 absolute top-0">ssdsdsd</div>
            </div>
        </slide>
    </carousel>
    
    <div class="border-2 border-MQ_light MQ_shadow"></div>

    <div class="flex justify-center content-center align-center top-[200px] absolute w-full">
        <div class="center flex justify-center">
            <img class="mr-4 h-64" src="src/assets/Logos/Stranded_Away_Icon.png" />
            <div class="flex flex-col h-full justify-end">
                <div class="text-8xl text-MQ_light p-dark">  Stranded </div>
                <div class="text-8xl text-MQ_light p-dark"> Away </div>
                <div class="text-2xl text-MQ_light"> Available now! </div>
            </div>
        </div>
    </div>

</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default {
    name: 'MQ_Carousel',
    components: {
        Carousel,
        Slide
    },
}
</script>

<style lang="scss" scoped>
.MQ_shadow {
    filter: drop-shadow(0px 2px 4px black);
}
</style>