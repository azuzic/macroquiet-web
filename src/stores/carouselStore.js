import { defineStore } from "pinia";
import { Public, Admin } from "@/services";
import { nextTick } from "vue";

export const useCarouselStore = defineStore("carouselStore", {
    state: () => ({
        //CAROUSEL
        update: false,
        carousels: [],
        pictures: [
            "StrandedAway1",
            "StrandedAway5",
            "StrandedAway7",
            "StrandedAway2",
            "StrandedAway9",
            "StrandedAway3",
            "StrandedAway6",
            "StrandedAway4",
            "StrandedAway8"
        ],
        activeCarouselID: "646ba59dd606be791f1f72e6",
        activeCarouselName: "StrandedAway",
    }),
    actions: {
        async setup() {
            let response = await Public.getData("carousel");
            if (response.data.length != 0) {
                this.carousels = response.data;
                let filter = this.carousels.filter(carousel => carousel.name == "StrandedAway")[0];
                this.pictures = filter.pictures;
                this.activeCarouselID = filter._id; 
                this.activeCarouselName = filter.name;
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
                const extracted = this.pictures.map(str => {
                    const regex = /\/assets\/(\d+)-/;
                    const match = regex.exec(str);
                    return match ? (this.activeCarouselName + match[1]) : str;
                });
                await Admin.patchData("carousel/" + this.activeCarouselID , { pictures: extracted });
            } catch (error) {
                console.warn("!!!updateCarousel!!!", error);
            }
        },
        async setCurrentCarousel(c) {
            this.activeCarouselName = c.name;
            this.activeCarouselID = c._id;
            this.pictures = c.pictures;
            this.MQupdate();
        },
        changeStyle(value) {
            switch (value) {
                case "Stranded Away": 
                    this.pictures = this.carousels.filter(carousel => carousel.name == "StrandedAway")[0].pictures; 
                    this.activeCarouselID = "646ba59dd606be791f1f72e6"; 
                    this.activeCarouselName = "StrandedAway";
                    break;
                case "Doge": 
                    this.pictures = this.carousels.filter(carousel => carousel.name == "Doge")[0].pictures; 
                    this.activeCarouselID = "646ba607ed2f21076cb4fb26"; 
                    this.activeCarouselName = "Doge";
                    break;
                default: 
                    this.pictures = this.carousels.filter(carousel => carousel.name == "StrandedAway")[0].pictures; 
                    this.activeCarouselID = "646ba59dd606be791f1f72e6"; 
                    this.activeCarouselName = "StrandedAway";
                    break;
            }
        }
    },
});
