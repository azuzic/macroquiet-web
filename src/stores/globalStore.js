import { defineStore } from "pinia";
import { Public, User } from "@/services/index_new.js";
import { nextTick } from "vue";
import cryptoRandomString from "crypto-random-string";

function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const base64 = reader.result.split(",")[1];
            resolve(base64);
        };
        reader.onerror = (error) => reject(error);
    });
}

export const useGlobalStore = defineStore("globalStore", {
    state: () => ({
        edit: "TIMELINE",
        update: true,
        carouselPictures: [],
        userLocalStorage: {},
        userProfile: {
            _id: "",
            username: "",
            former_usernames: [],
            register_method: "",
            username_last_changed: null,
            email: "",
            admin: false,
            profile: {
                description: "Hi, I am zuza. Nice to meet you!",
                image: {
                    avatar: "",
                    cover: "",
                },
                games: [],
            },
        },
        timeline: [],
        timelineEditing: "",
    }),
    actions: {
        async setup() {
            this.carouselPictures = await Public.getData("carousel");
            this.carouselPictures = this.carouselPictures.data;
            this.timeline = await Public.getData("timeline");
            this.timeline = this.timeline.data;
            this.userProfile = await User.getCurrentUserProfile();
            this.userProfile = this.userProfile.data;
        },
        async MQupdate() {
            this.update = false;
            await nextTick();
            this.update = true;
        },
        async addCarouselPicture(image) {
            await readFile(image)
                .then((base64) => {
                    let randomBytes = cryptoRandomString({
                        length: 10,
                        type: "base64",
                    });
                    this.carouselPictures.push({
                        _id: randomBytes,
                        public_url: "data:image/png;base64," + base64,
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
            this.MQupdate();
        },
        async removeCarouselPicture(id) {
            this.carouselPictures = this.carouselPictures.filter(
                (item) => item._id !== id
            );
            this.MQupdate();
        },
        async removeTimelineCard(id) {
            this.timeline = this.timeline.filter((item) => item._id !== id);
            this.MQupdate();
        },
        async addTimelineCard() {
            let randomBytes = cryptoRandomString({
                length: 10,
                type: "base64",
            });
            this.timeline.unshift({
                _id: randomBytes,
                author: "MacroQuiet",
                date: this.date(),
                icon: "fa-brands fa-youtube",
                image: null,
                text: "text",
                title: "title",
            });
            this.MQupdate();
        },
        date() {
            const date = new Date();

            const day = date.getDate();
            const month = date.getMonth();
            const year = date.getFullYear();

            return `${day}.${month}.${year}`;
        },
    },
});
