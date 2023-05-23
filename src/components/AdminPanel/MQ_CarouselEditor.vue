<template>
    <div class="flex flex-col w-full p-4">
        <div class="font-bold w-full text-center px-8">
            <MQ_h2_small :white="true" text=" "><p class="text-base sm:text-lg md:text-xl text-MQ_light">Current Carousel Images</p></MQ_h2_small>
            <p class="text-xs text-MQ_red">Drag images to change their order</p>
        </div>

        <div class="flex justify-center gap-1 my-2">
            <img v-for="c in carouselStore.carousels" :src="carousels[c.name]"
                @click="carouselStore.setCurrentCarousel(c)" class="h-10 rounded-full border-[2px]" 
                :class="[c._id == carouselStore.activeCarouselID ? 'border-MQ_green' : 'border-MQ_dark hover:border-MQ_red cursor-pointer']">
        </div>

        <draggable :change="carouselStore.updateCarousel()" v-if="carouselStore.update" v-model="carouselStore.pictures" 
            class="flex flex-wrap justify-center gap-4 | py-4 rounded-lg | overflow-y-auto">
            <template v-slot:item="{ item }">
                <div class="aspect-video | h-16 xs:h-28 md:h-24 lg:h-28 xl:h-36 2xl:h-48 | transition-all duration-300">
                    <div class="w-full h-full overflow-hidden bg-cover bg-center rounded-md drop-shadow-MQ relative | flex justify-center items-center
                        border-3 border-MQ_red border-opacity-0 hover:border-opacity-100 active:border-opacity-100 | transition-all duration-300" 
                        :style="'background-image: url(' + item + ')'"></div>
                </div>
            </template>
        </draggable >

    </div>
</template>

<script>
import MQ_h2_small from "@/components/Global/MQ_h2/MQ_h2_small.vue";
import MQ_alert from '@/components/Global/MQ_alerts/MQ_alert.vue';
import defaultUserIcon from "@/assets/portraits/default_user_icon.png";
import StrandedAwayIcon from "@/assets/icons/gameIcons/StrandedAwayIcon.png";
import DogeIcon from "@/assets/icons/gameIcons/DogeIcon.png";
import { useCarouselStore } from '@/stores/carouselStore'
import Draggable from "vue3-draggable";

export default {
    name: "MQ_CarouselEditor",
    components: { MQ_h2_small, Draggable, MQ_alert },
    props: {},
    setup() {
        const carouselStore = useCarouselStore()
        return { carouselStore, defaultUserIcon, StrandedAwayIcon, DogeIcon }
    },
    data() {return {
        image: "",
        carousels: {
            "StrandedAway": this.StrandedAwayIcon,
            "Doge": this.DogeIcon,
        }
    }},
}
</script>

<style lang="scss">
.MQ_upload {
    .selected-image, .wrapper {
        display: none !important;
    }
    .input {
        opacity: 0;
        margin-left: -128px;
        height: 100%;
        cursor: pointer !important;
    }
}
</style>