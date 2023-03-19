import { defineStore } from "pinia";
import { Admin } from "@/services";
import { toRaw } from "vue";

export const useGlobalStore = defineStore("globalStore", {
    state: () => ({
        carouselPictures: [],
        timeline: [],
    }),
    actions: {
        async setup() {
            this.carouselPictures = toRaw(
                await Admin.data.getCarouselPictures
            ).data;
            this.timeline = toRaw(
                await Admin.data.getTimelinePosts
            ).data.reverse();
        },
    },
});
