import { defineStore } from "pinia";
import { Public, User, Admin } from "@/services";
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

let wait = function (seconds) {
    return new Promise((resolveFn) => {
        setTimeout(resolveFn, seconds * 1000);
    });
};

export const useGlobalStore = defineStore("globalStore", {
    state: () => ({
        edit: "TIMELINE",
        type: "none",
        submitting: false,
        update: true,
        carouselPictures: [],
        carouselID: "",
        userLocalStorage: {
            token: "",
            email: "",
            username: "",
            admin: false,
        },
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
            let response = await Public.getData("carousel");
            if (response.data.length != 0) {
                this.carouselID = response.data[0]._id;
                this.carouselPictures = response.data[0].CarouselPictures;
            }
            this.timeline = await Public.getData("timeline");
            this.timeline = this.timeline.data.reverse();
            if (this.userLocalStorage.token != "") {
                this.userProfile = await User.getCurrentUserProfile();
                this.userProfile = this.userProfile.data;
            }
        },
        async MQupdate() {
            this.update = false;
            await nextTick();
            this.update = true;
        },
        async addCarouselPicture(image) {
            this.submitting = true;
            this.MQupdate();
            try {
                let formData = new FormData();
                formData.append("image", image);
                formData.append("route", "carousel");

                let response = await Admin.uploadImage(formData);

                await readFile(image)
                    .then((base64) => {
                        let randomBytes = cryptoRandomString({
                            length: 10,
                            type: "base64",
                        });
                        this.carouselPictures.push({
                            _id: randomBytes,
                            public_url: response.data.public_url,
                        });
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                this.MQupdate();

                await Admin.patchData("carousel/" + this.carouselID, {
                    CarouselPictures: this.carouselPictures,
                });
                await wait(1);
                console.log("Request sent successfully!");
                this.submitting = false;
                this.type = "success";
                await wait(2);
                this.type = "none";
            } catch (e) {
                console.error("Error sending message! ", e);
                await wait(1);
                this.submitting = false;
                this.type = "warning";
                await wait(2);
                this.type = "none";
            }
        },
        async removeCarouselPicture(id) {
            this.carouselPictures = this.carouselPictures.filter(
                (item) => item._id !== id
            );
            await Admin.patchData("carousel/" + this.carouselID, {
                CarouselPictures: this.carouselPictures,
            });
            this.MQupdate();
        },
        async updateCarousel() {
            await Admin.patchData("carousel/" + this.carouselID, {
                CarouselPictures: this.carouselPictures,
            });
        },
        async removeTimelineCard(id) {
            await Admin.deleteData("timeline/" + id);
            this.timeline = this.timeline.filter((item) => item._id !== id);
            this.MQupdate();
        },
        async saveTimelineCard(id, data) {
            await Admin.putData("timeline/" + id, data);
        },
        async addTimelineCard() {
            let newTimelineCard = {
                date: this.date(),
                icon: "fa-brands fa-youtube",
                text: "text",
                title: "title",
            };
            let response = await Admin.postData("timeline", newTimelineCard);
            newTimelineCard["_id"] = response;
            this.timeline.unshift(newTimelineCard);
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
