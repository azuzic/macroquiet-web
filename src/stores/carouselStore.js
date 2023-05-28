import { defineStore } from "pinia";
import { Public, Admin } from "@/services";
import { nextTick } from "vue";
import { images } from "@/stores/images.js";

export const useCarouselStore = defineStore("carouselStore", {
    state: () => ({
        //CAROUSEL
        update: false,
        carousels: [],
        pictures: images.Carousel.StrandedAway,
        activeCarouselID: undefined,
    }),
    actions: {
        async setup() {
            let response = await Public.getData("carousel");
            if (response.data.length != 0) {
                this.carousels = response.data;
                let filter = this.carousels.filter(carousel => carousel.name == "StrandedAway")[0];
                this.pictures = filter.pictures;
                this.activeCarouselID = filter._id; 
            }
            this.MQupdate();
            this.changeStyle("StrandedAway")
        },
        async MQupdate() {
            this.update = false;
            await nextTick();
            this.update = true; 
        },
        async updateCarousel() {
            try {
                if (this.activeCarouselID == undefined) return;
                await Admin.patchData("carousel/" + this.activeCarouselID , { pictures: this.pictures });
            } catch (error) {
                console.warn("!!!updateCarousel!!!", error);
            }
        },
        async setCurrentCarousel(c) {
            this.activeCarouselID = c._id;
            this.pictures = c.pictures;
            this.MQupdate();
        },
        changeStyle(value) {
            switch (value) {
                case "Stranded Away": 
                    this.pictures = this.carousels.filter(carousel => carousel.name == "StrandedAway")[0].pictures; 
                    this.activeCarouselID = "646ba59dd606be791f1f72e6"; 
                    break;
                case "Doge": 
                    this.pictures = this.carousels.filter(carousel => carousel.name == "Doge")[0].pictures; 
                    this.activeCarouselID = "646ba607ed2f21076cb4fb26"; 
                    break;
                default: 
                    this.pictures = this.carousels.filter(carousel => carousel.name == "StrandedAway")[0].pictures; 
                    this.activeCarouselID = "646ba59dd606be791f1f72e6"; 
                    break;
            }
        }
    },
});
