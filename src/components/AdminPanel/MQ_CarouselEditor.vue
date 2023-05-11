<template>
    <div class="flex flex-col w-full p-4 gap-4">
        <div class="font-bold w-full text-center px-8">
            <MQ_h2_small :white="true" text=" "><p class="text-base sm:text-lg md:text-xl text-MQ_light">Current Carousel Images</p></MQ_h2_small>
            <p class="text-xs text-MQ_red">Drag images to change their order</p>
        </div>

        <div class="flex md:grow-0 items-center justify-center | h-16 overflow-hidden | transition-all duration-300 | relative">
            <v-image-input class="MQ_upload absolute peer w-28 overflow-hidden z-50" @change="globalStore.addCarouselPicture(image)" v-model="image"/>
            <div class="px-5 py-1.5 | text-sm whitespace-nowrap cursor-pointer | bg-transparent peer-hover:bg-MQ_red | text-MQ_light peer-hover:text-MQ_dark 
                        z-40 | peer-hover:font-bold | border-MQ_red border-2 rounded-full | transition-all duration-300"
                :class="globalStore.submitting || globalStore.type != 'none' ? 'opacity-0 delay-0' : 'opacity-100 delay-0'">
                ADD IMAGE
            </div>

            <img class="absolute | animate-spin_slow transition-all duration-500"
                src="src/assets/Logos/macroquiet_logo_icon.png"
                :class="globalStore.submitting ? 'h-16 opacity-100 delay-500' : 'h-0 opacity-0 delay-0'">

            <MQ_alert :show="globalStore.type == 'warning'" color="rgb(220, 38, 68)" icon="fa-solid fa-triangle-exclamation"
                class="absolute top-0">
                <b>Failed to upload image!</b>
            </MQ_alert>
            <MQ_alert :show="globalStore.type == 'success'" color="rgb(12, 173, 134)" icon="fa-solid fa-circle-check"
                class="absolute top-0">
                <b>Image uploaded successfully!</b>
            </MQ_alert>
        </div>

        <draggable :change="globalStore.updateCarousel()" v-if="globalStore.update" v-model="globalStore.carouselPictures" class="flex flex-wrap justify-center gap-4 | p-4 rounded-lg | overflow-y-auto">
            <template v-slot:item="{ item }">
                <div class="aspect-video | h-16 xs:h-20 md:h-24 lg:h-28 xl:h-36 2xl:h-52 | transition-all duration-300">
                    <div class="w-full h-full overflow-hidden bg-cover bg-center rounded-md drop-shadow-MQ relative" :style="'background-image: url(' + item.public_url + ')'">
                        <div v-if="!globalStore.submitting" @click="globalStore.removeCarouselPicture( item._id )" class="absolute drop-shadow-MQ top-0.5 right-1 text-MQ_light hover:text-MQ_red font-bold text-xl cursor-pointer">
                            <i class="fa-solid fa-trash-can"></i>
                        </div>
                    </div>
                </div>
            </template>
        </draggable >

    </div>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import MQ_h2_small from "../Global/MQ_h2/MQ_h2_small.vue";
import Draggable from "vue3-draggable";
import { useGlobalStore } from '@/stores/globalStore'
import MQ_alert from '@/components/Global/MQ_alerts/MQ_alert.vue';

export default {
    name: "MQ_CarouselEditor",
    components: { MqResponsive, MQ_h2_small, Draggable, MQ_alert },
    props: {},
    setup() {
        const globalStore = useGlobalStore()
        return { globalStore }
    },
    data() {return {
        image: "",
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
        cursor: pointer !important;
    }
}
</style>