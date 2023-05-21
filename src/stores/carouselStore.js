import { defineStore } from "pinia";
import { Public, Admin } from "@/services";
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

export const useCarouselStore = defineStore("carouselStore", {
    state: () => ({
        //UPDATING
        type: "none",
        submitting: false,
        update: true,

        //CAROUSEL
        carousels: [],
        carouselPictures: {
            pictures: [],
            _id: "",
            name: "",
            active: false,
        },
        activeCarouselID: undefined,
        carouselEditing: "",
    }),
    actions: {
        async setup() {
            let response = await Public.getData("carousel");
            if (response.data.length != 0) {
                this.carousels = response.data;
                this.carouselPictures = this.carousels.filter(
                    (carousel) => carousel.active
                )[0];
                this.activeCarouselID = this.carouselPictures._id; 
            }
            this.MQupdate();
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
                    .then(() => {
                        let randomBytes = cryptoRandomString({
                            length: 10,
                            type: "base64",
                        });
                        this.carouselPictures.pictures.push({
                            _id: randomBytes,
                            public_url: response.data.public_url,
                        });
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                this.MQupdate();

                await Admin.patchData("carousel/" + this.activeCarouselID, {
                    pictures: this.carouselPictures.pictures,
                });
                await wait(1);
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
            try {
                this.carouselPictures.pictures =
                    this.carouselPictures.pictures.filter(
                        (item) => item._id !== id
                    );
                await Admin.patchData("carousel/" + this.activeCarouselID, {
                    pictures: this.carouselPictures.pictures,
                });
                this.carouselEditing = "";
                this.MQupdate();
            } catch (error) {
                console.warn("!!!removeCarouselPicture!!!");
            }
        },
        async updateCarousel() {
            try {
                if (this.activeCarouselID == undefined) return;
                await Admin.patchData("carousel/" + this.activeCarouselID, {
                    pictures: this.carouselPictures.pictures,
                });
            } catch (error) {
                console.warn("!!!updateCarousel!!!");
            }
        },
        async setCurrentCarousel(c) {
            try {
                await Admin.patchData("carousel/" + this.activeCarouselID, {
                    active: false,
                });
                this.activeCarouselID = c._id;
                this.carouselPictures = c;
                await Admin.patchData("carousel/" + this.activeCarouselID, {
                    active: true,
                });
                this.MQupdate();
            } catch (error) {
                console.warn("!!!setCurrentCarousel!!!");
            }
        },
        changeStyle(value) {
            switch (value) {
                case "Stranded Away": this.carouselPictures = this.carousels[0]; break;
                case "Doge": this.carouselPictures = this.carouselPictures = this.carousels[1]; break;
                default: this.carouselPictures = this.carousels[0]; break;
            }
        }
    },
});
