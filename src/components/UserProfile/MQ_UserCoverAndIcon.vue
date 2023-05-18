<template>
    <div class="bg-center bg-cover h-[240px] xs:h-[280px] sm:h-[340px] md:h-[400px] | overflow-hidden relative | transition-all duration-300
        w-full sm:px-16 lg:px-96 | flex justify-between items-end" :style="'background-image: url(' + readImageCover + ');'">
        <div class="w-full h-full bg-gradient-to-b from-MQ_dark opacity-25 absolute top-0 left-0"></div>
        <div class="w-full h-full bg-gradient-to-t from-MQ_dark opacity-25 absolute top-0 left-0"></div>
        <v-image-input v-if="globalStore.editing" class="MQ_upload absolute peer overflow-hidden z-50 centered" :class="globalStore.editing ? 'opacity-100 w-36 h-10' : 'opacity-0 w-16 h-0'"
        @change="updateUserProfileCover(image)" v-model="globalStore.userProfile.profile.image.cover"/>
        <div class="text-sm whitespace-nowrap | bg-transparent | text-MQ_light border-MQ_red border-2 rounded overflow-hidden flex justify-center items-center
            transition-all duration-300 | peer-hover:bg-MQ_red peer-hover:text-MQ_dark peer-hover:font-bold text-center z-10 drop-shadow-MQ absolute centered"
            :class="globalStore.editing ? 'opacity-100 w-36 h-10' : 'opacity-0 w-16 h-0'">
            CHANGE COVER
        </div>
        <div class="p-4 flex grow justify-start items-start">
            <!--USER ICON-->
            <div class="w-32 aspect-square rounded-md bg-cover bg-center | flex justify-center items-center | relative px-4 drop-shadow-MQ overflow-hidden" 
                :style="'background-image: url(' + readImageAvatar + ');'">
                <div class="absolute bg-MQ_dark w-full h-full transition-all duration-300" :class="globalStore.editing ? 'bg-opacity-75' : 'bg-opacity-0'"></div>
                <v-image-input v-if="globalStore.editing" class="MQ_upload absolute peer overflow-hidden z-[200]" :class="globalStore.editing ? 'opacity-100 w-full h-14' : 'opacity-0 w-16 h-0'"
                @change="updateUserProfileAvatar(image)" v-model="globalStore.userProfile.profile.image.avatar"/>
                <div class="px-5 py-1.5 | text-sm whitespace-nowrap | bg-transparent | text-MQ_light border-MQ_red rounded flex justify-center items-center
                    transition-all duration-300 | peer-hover:bg-MQ_red peer-hover:text-MQ_dark peer-hover:font-bold text-center z-10 drop-shadow-MQ"
                    :class="globalStore.editing ? 'opacity-100 w-full h-14' : 'opacity-0 w-16 h-0'">
                    CHANGE <br> AVATAR
                </div>
            </div>
            <div class="flex flex-col items-start pl-4 gap-4 grow h-32">
                <div class="text-2xl text-MQ_red flex justify-center items-center gap-2 drop-shadow-MQ"> 
                    <!--USERNAME-->
                    <i v-if="globalStore.userProfile.admin" class="fa-solid fa-shield text-MQ_green"></i> {{ globalStore.userProfile.username }} 
                    <i @click="showPreviousUsername = !showPreviousUsername" :class="showPreviousUsername ? '-scale-100' : ''"
                        class="fa-solid fa-caret-down text-sm mb-1 cursor-pointer hover:text-MQ_light relative peer">
                        <div @mouseleave ="showPreviousUsername = false" v-if="showPreviousUsername" 
                            class="absolute right-4 z-50 w-fit h-fit bg-MQ_dark bg-opacity-25 p-2 rounded-md gap-1 flex flex-col
                                text-MQ_light font-normal cursor-default -scale-100 text-xs">
                            <div class="whitespace-nowrap underline text-sm"> Previous usernames: </div>
                            <div v-for="u in globalStore.userProfile.former_usernames">{{u}}</div>
                        </div>
                    </i>
                </div>
                <!--DESCRIPTION-->
                <div class="text-MQ_light text-sm w-full grow relative drop-shadow-MQ"> 
                    <textarea v-model="globalStore.userProfile.profile.description" placeholder=" " :disabled="!globalStore.editing"
                        class="block w-full text-sm bg-MQ_light rounded-t-md appearance-none absolute -mx-2 p-2 z-10
                        outline-none peer caret-MQ_light resize-none | transition-all duration-300" :maxlength="1000" rows="4"
                        :class="[globalStore.editing ? 'bg-opacity-5' : 'bg-opacity-0', submitting || type != 'none' ? 'h-0 opacity-0 delay-0' : 'h-full opacity-100']"></textarea>
                    <img class="absolute | animate-spin_slow transition-all duration-500"
                        src="@/assets/Logos/macroquiet_logo_icon.png"
                        :class="submitting ? 'h-16 opacity-100 delay-500' : 'h-0 opacity-0 delay-0'">
                    <MQ_alert :show="type == 'warning'" color="rgb(220, 38, 68)" icon="fa-solid fa-triangle-exclamation"
                        class="absolute w-full top-0">
                        <b>{{ response }}!</b>
                    </MQ_alert>
                    <MQ_alert :show="type == 'success'" color="rgb(12, 173, 134)" icon="fa-solid fa-circle-check"
                        class="absolute w-full top-0">
                        <b>{{ response }}</b>
                    </MQ_alert>
                </div>
            </div>
    
        </div>

        <div class="flex flex-col text-center">
            <div v-if="globalStore.editing && !submitting && type == 'none'" class="px-5 py-1.5 mr-4 mb-4 | text-sm whitespace-nowrap | bg-transparent | text-MQ_light
                	border-MQ_red border-2 rounded | transition-all duration-300 | hover:bg-MQ_red hover:text-MQ_dark hover:font-bold cursor-pointer drop-shadow-MQ"
                @click="cancel()">
                Cancel
            </div>
            <div class="px-5 py-1.5 mr-4 mb-4 | text-sm whitespace-nowrap | bg-transparent | text-MQ_light drop-shadow-MQ
                border-MQ_red border-2 rounded | transition-all duration-300"
                :class="!submitting && type == 'none' ? 'hover:bg-MQ_red hover:text-MQ_dark hover:font-bold cursor-pointer' : 'opacity-25'"
                @click="!submitting && type == 'none' ? save() : ''">
                {{ globalStore.editing ? 'Save' : 'Edit Profile' }}
            </div>
        </div>  
    </div>
</template>

<script>
import userCover from '@/assets/background/userCover.jpg'
import userIcon from '@/assets/portraits/default_user_icon.png'
import MQ_textAreaInput from '@/components/Global/MQ_inputs/MQ_textAreaInput.vue';
import MQ_alert from '@/components/Global/MQ_alerts/MQ_alert.vue';
import { User } from "@/services";
import { useGlobalStore } from '@/stores/globalStore';

let wait = function (seconds) { return new Promise((resolveFn) => { setTimeout(resolveFn, seconds * 1000); }); };

export default {
    name: "MQ_UserCoverAndIcon",  
    components: { MQ_textAreaInput, MQ_alert },
    setup() {
        const globalStore = useGlobalStore()
        return { globalStore, userCover, userIcon }
    },
    data() { return { 
        showPreviousUsername: false,
        submitting: false,
        type: "none",
        response: "",
        formDataImageAvatar: "",
        formDataImageCover: "",
        tempDescSave: "",
        tempAvatarSave: "",
        tempCoverSave: "",
    } },
    computed: {
        readImageAvatar() {                 
            if (!this.globalStore.editing) {  
                if (this.globalStore.userProfile.profile.image.avatar == '') return this.userIcon;
                return this.globalStore.userProfile.profile.image.avatar;
            }
            if (this.globalStore.userProfile.profile.image.avatar == '') return this.userIcon;
            else if (typeof (this.globalStore.userProfile.profile.image.avatar) == "string") return this.globalStore.userProfile.profile.image.avatar;
            let file = URL.createObjectURL(this.globalStore.userProfile.profile.image.avatar);
            return file;
        },
        readImageCover() {
            if (!this.globalStore.editing) {
                if (this.globalStore.userProfile.profile.image.cover == '') return this.userCover;
                return this.globalStore.userProfile.profile.image.cover;
            }
            if (this.globalStore.userProfile.profile.image.cover == '') return this.userCover;
            else if (typeof (this.globalStore.userProfile.profile.image.cover) == "string") return this.globalStore.userProfile.profile.image.cover;
            let file = URL.createObjectURL(this.globalStore.userProfile.profile.image.cover);
            return file;
        },
    },
    methods: {
        cancel() {
            this.globalStore.editing = false;
            this.globalStore.userProfile.profile.description = this.tempDescSave;
            this.globalStore.userProfile.profile.image.avatar = this.tempAvatarSave;
            this.globalStore.userProfile.profile.image.cover = this.tempCoverSave;
        },
        async updateUserProfileAvatar() {
            this.formDataImageAvatar = new FormData();
            this.formDataImageAvatar.append("image", this.globalStore.userProfile.profile.image.avatar);
            this.formDataImageAvatar.append("type", "avatar");
        },
        async updateUserProfileCover() {
            this.formDataImageCover = new FormData();
            this.formDataImageCover.append("image", this.globalStore.userProfile.profile.image.cover);
            this.formDataImageCover.append("type", "cover");
        },
        async save() {
            this.globalStore.editing = !this.globalStore.editing;
            if (!this.globalStore.editing) {
                this.submitting = true;
                try {
                    if (this.formDataImageAvatar != "") {
                        let responseAvatar = await User.putChangeProfileImage(this.formDataImageAvatar);
                        this.globalStore.userProfile.profile.image.avatar = responseAvatar.data.publicURL;
                    }
                    if (this.formDataImageCover != "") {
                        let responseCover = await User.putChangeProfileImage(this.formDataImageCover)
                        this.globalStore.userProfile.profile.image.cover = responseCover.data.publicURL;
                    }
                    if (this.formDataImageCover != "") 
                        await User.putChangeProfileImage(this.formDataImageCover);
                    await User.putChangeProfileDescription({ description: this.globalStore.userProfile.profile.description });
                    this.response = "Profile successfully updated!";
                    this.submitting = false;
                    this.type = "success";
                    await wait(2);
                    this.type = "none";
                    this.formDataImageAvatar = "";
                    this.formDataImageCover = "";
                } catch (e) {
                    this.response = e.response.data.error;
                    await wait(2);
                    this.submitting = false;
                    this.type = "warning";
                    await wait(2);
                    this.type = "none";
                    console.error(e.response);
                }
            } else {
                this.tempDescSave = this.globalStore.userProfile.profile.description;
                this.tempAvatarSave = this.globalStore.userProfile.profile.image.avatar;
                this.tempCoverSave = this.globalStore.userProfile.profile.image.cover;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.centered {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>