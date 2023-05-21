import { defineStore } from "pinia";
import { User } from "@/services";
import { nextTick } from "vue";

export const useGlobalStore = defineStore("globalStore", {
    state: () => ({
        //UPDATING
        edit: "",
        update: true,
        editing: false,
        style: [],

        //USER
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
    }),
    actions: {
        async setup() {
            try {
                this.changeStyle("default");
                let response = await User.getCurrentUserProfile();
                if (response) {
                    this.userProfile = response.userData.data;
                    this.edit = response.token.edit;
                    this.MQupdate();
                }
            } catch (error) {
                let detailedError = {
                    functionName: "globalStore - setup",
                    error: error,
                };
                console.warn(detailedError);
            }
        },
        async MQupdate() {
            this.update = false;
            await nextTick();
            this.update = true;
        },
        setEdit(value) {
            this.edit = value;
            let tokenData = JSON.parse(localStorage.getItem("user"));
            tokenData["edit"] = value;
            localStorage.setItem("user", JSON.stringify(tokenData));
        },
        changeStyle(value) {
            switch (value) {
                case "Stranded Away": this.style = ["theme-stranded Squarewave", "main-stranded", "bg-MQ_dark", "shadow-vignette"]; break;
                case "Doge": this.style = ["theme-doge EHSMB font-bold", "main-doge", "", "shadow-vignette_light"]; break;
                default: this.style = ["theme-default Poppins", "main", "bg-MQ_dark", "shadow-vignette"]; break;
            }
        }
    },
});
