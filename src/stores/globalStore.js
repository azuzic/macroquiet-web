import { defineStore } from "pinia";
import { User } from "@/services";
import { nextTick } from "vue";
let wait = function (seconds) {
	return new Promise((resolveFn) => {
		setTimeout(resolveFn, seconds * 1000);
	});
};
export const useGlobalStore = defineStore("globalStore", {
	state: () => ({
		//STORE DEBUG
		depth: 5,
		debug: false,
		storeSelected: "globalStore",

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
		showProfile: {
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
			var root = document.documentElement;
			switch (value) {
				case "Stranded Away":
					this.style = ["theme-stranded Squarewave tracking-wider SA_cursor", "main-stranded", "bg-MQ_dark", "shadow-vignette"];
					root.style.setProperty("--thumb", "#16a34a");
					root.style.setProperty("--thumbhover", "#EF5350");
					root.style.setProperty("--thumbbg", "#06060a");
					break;
				case "Doge":
					this.style = ["theme-doge EHSMB font-bold tracking-wider", "main-doge", "", "shadow-vignette_light"];
					root.style.setProperty("--thumb", "#bfc86f");
					root.style.setProperty("--thumbhover", "#fb445a");
					root.style.setProperty("--thumbbg", "#0a2830");
					break;
				default:
					this.style = ["theme-default Poppins", "main", "bg-MQ_dark", "shadow-vignette"];
					root.style.setProperty("--thumb", "#EF5350");
					root.style.setProperty("--thumbhover", "#cbd5e1");
					root.style.setProperty("--thumbbg", "#06060a");
					break;
			}
			this.MQupdate();
		},
		async getUserProfile(value) {
			this.edit = "";
			this.update = true;
			this.editing = false;
			let response = await User.getSpecificProfile(value);
			if (response) this.showProfile = response.userData.data;
			return response;
		},
		async wait(seconds) {
			await wait(seconds);
		},
		async getImageWidthHeight(img) {
			// Create a Promise to await image loading
			const loadImage = new Promise((resolve, reject) => {
				const image = new Image();
				image.onload = () => {
					resolve({ width: image.width, height: image.height });
				};
				image.onerror = () => {
					reject(new Error("Failed to load image"));
				};
				image.src = URL.createObjectURL(img);
			});

			try {
				// Wait for the image to load
				const { width, height } = await loadImage;
				return { width: width, height: height };
			} catch (error) {
				console.error(error);
			}
		},
	},
});
