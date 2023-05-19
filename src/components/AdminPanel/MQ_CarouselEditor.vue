<template>
    <div class="flex flex-col w-full p-4">
        <div class="font-bold w-full text-center px-8">
            <MQ_h2_small :white="true" text=" "><p class="text-base sm:text-lg md:text-xl text-MQ_light">Current Carousel Images</p></MQ_h2_small>
            <p class="text-xs text-MQ_red">Drag images to change their order</p>
        </div>

        <div class="flex justify-center gap-1 my-2" :class="carouselStore.carouselEditing == '' ? '' : '-z-10'">
            <img v-for="c in carouselStore.carousels" :src="carousels[c.name]"
                @click="carouselStore.setCurrentCarousel(c)" class="h-10 rounded-full border-[2px]" 
                :class="[c._id == carouselStore.activeCarouselID ? 'border-MQ_green' : 'border-MQ_dark hover:border-MQ_red cursor-pointer']">
        </div>

        <div class="flex md:grow-0 items-center justify-center | overflow-hidden | transition-all duration-300 | relative"
            :class="[carouselStore.submitting || carouselStore.type != 'none' ? 'h-20' : 'h-10', carouselStore.carouselEditing == '' ? '' : '-z-10']">

            <v-image-input class="MQ_upload absolute peer w-28 overflow-hidden z-50" @change="carouselStore.addCarouselPicture(image)" v-model="image"/>
            <div class="px-5 py-1.5 mt-1 | text-sm whitespace-nowrap cursor-pointer | bg-transparent peer-hover:bg-MQ_red | text-MQ_light peer-hover:text-MQ_dark 
                        z-40 | peer-hover:font-bold | border-MQ_red border-2 rounded-full | transition-all duration-300"
                :class="carouselStore.submitting || carouselStore.type != 'none' ? 'opacity-0 delay-0' : 'opacity-100 delay-0'">
                ADD IMAGE
            </div>

            <img class="absolute | animate-spin_slow transition-all duration-500 mt-2"
                src="src/assets/Logos/macroquiet_logo_icon.png"
                :class="carouselStore.submitting ? 'h-16 opacity-100 delay-500' : 'h-0 opacity-0 delay-0'">

            <MQ_alert :show="carouselStore.type == 'warning'" color="rgb(220, 38, 68)" icon="fa-solid fa-triangle-exclamation"
                class="absolute top-0 mt-2">
                <b>Failed to upload image!</b>
            </MQ_alert>
            <MQ_alert :show="carouselStore.type == 'success'" color="rgb(12, 173, 134)" icon="fa-solid fa-circle-check"
                class="absolute top-0 mt-2">
                <b>Image uploaded successfully!</b>
            </MQ_alert>
        </div>

        <draggable :change="carouselStore.updateCarousel()" v-if="carouselStore.update" v-model="carouselStore.carouselPictures.pictures" 
            class="flex flex-wrap justify-center gap-4 | py-4 rounded-lg | overflow-y-auto">
            <template v-slot:item="{ item }">
                <div class="aspect-video | h-16 xs:h-28 md:h-24 lg:h-28 xl:h-36 2xl:h-48 | transition-all duration-300">
                    <div class="w-full h-full overflow-hidden bg-cover bg-center rounded-md drop-shadow-MQ relative | flex justify-center items-center" :style="'background-image: url(' + item.public_url + ')'">
                        <div v-if="!carouselStore.submitting && carouselStore.carouselEditing == ''" class="absolute drop-shadow-MQ top-0.5 right-1 text-MQ_light hover:text-MQ_red font-bold text-xl cursor-pointer">
                            <i @click="carouselStore.carouselEditing = item._id" class="fa-solid fa-trash-can"></i>
                        </div>
                        <div v-else-if="carouselStore.carouselEditing == item._id" class="absolute w-fit px-5 py-1 bg-MQ_dark bg-opacity-90 | flex flex-col justify-center items-center
                                    hover:text-MQ_light rounded-xl | text-sm">
                            <div class="whitespace-nowrap font-normal text-MQ_light">Are you sure?</div>
                            <div class="w-full flex justify-evenly gap-2">
                                <div @click="carouselStore.carouselEditing = '';" class="hover:font-bold font-normal text-MQ_red hover:underline cursor-pointer">NO</div>
                                <div @click="carouselStore.removeCarouselPicture(item._id);" class="hover:font-bold font-normal text-MQ_green hover:underline cursor-pointer">YES</div>
                            </div>
                        </div>
                    </div>
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
            "WizardsKingdom": this.defaultUserIcon,
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