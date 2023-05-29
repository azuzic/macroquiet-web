<template>
    <div class="bg-center bg-cover h-[280px] sm:h-[340px] md:h-[400px] | overflow-hidden relative | transition-all duration-300 w-full
        xs:px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-80 3xl:px-96 | flex justify-between items-end" :style="'background-image: url(' + readImageCover + ');'">
        <div class="w-full h-full bg-gradient-to-b from-MQ_dark opacity-25 absolute top-0 left-0"></div>
        <div class="w-full h-full bg-gradient-to-t from-MQ_dark opacity-25 absolute top-0 left-0"></div>
        <v-image-input class="MQ_upload absolute peer overflow-hidden z-50 centered" :class="globalStore.editing ? 'opacity-100 w-36 h-10' : 'opacity-0 w-16 h-0 pointer-events-none'"
        @change="updateUserProfileCover(image)" v-model="globalStore.userProfile.profile.image.cover"/>
        <div class="text-xs sm:text-sm whitespace-nowrap | bg-transparent | text-MQ_light border-MQ_red border-2 rounded overflow-hidden flex justify-center items-center
            transition-all duration-300 | peer-hover:bg-MQ_red peer-hover:text-MQ_dark peer-hover:font-bold text-center z-10 drop-shadow-MQ absolute centered"
            :class="globalStore.editing ? 'opacity-100 w-32 sm:w-36 h-9 sm:h-10' : 'opacity-0 w-16 h-0'">
            CHANGE COVER
        </div>
        <div class="pl-2 sm:pl-4 py-2 sm:py-4 flex grow justify-start items-end | transition-all duration-300">
            <!--USER ICON-->
            <div class="w-24 sm:w-32 aspect-square rounded-md bg-cover bg-center | flex justify-center items-center | relative px-4 drop-shadow-MQ overflow-hidden | transition-all duration-300" 
                :style="'background-image: url(' + readImageAvatar + ');'">
                <div class="absolute bg-MQ_dark w-full h-full transition-all duration-300" :class="globalStore.editing ? 'bg-opacity-75' : 'bg-opacity-0'"></div>
                <v-image-input class="MQ_upload absolute peer overflow-hidden z-[200]" :class="globalStore.editing ? 'opacity-100 w-full h-14' : 'opacity-0 w-16 h-0 pointer-events-none'"
                @change="updateUserProfileAvatar(image)" v-model="globalStore.userProfile.profile.image.avatar"/>
                <div class="px-5 py-1.5 | text-xs sm:text-sm whitespace-nowrap | bg-transparent | text-MQ_light border-MQ_red rounded flex justify-center items-center
                    transition-all duration-300 | peer-hover:bg-MQ_red peer-hover:text-MQ_dark peer-hover:font-bold text-center z-10 drop-shadow-MQ"
                    :class="globalStore.editing ? 'opacity-100 w-full h-14' : 'opacity-0 w-16 h-0'">
                    CHANGE <br> AVATAR
                </div>
            </div>
            <div class="flex flex-col items-start pl-2 sm:pl-4 gap-1 sm:gap-4 grow h-24 sm:h-32 | transition-all duration-300">
                <div class="text-xl sm:text-2xl text-MQ_red flex justify-center items-center drop-shadow-MQ z-10"> 
                    <!--USERNAME-->
                    <div v-if="globalStore.userProfile.admin" class="relative mr-2">
                        <i class="fa-solid fa-shield text-MQ_green peer"></i> 
                        <MQ_Tooltip>ADMIN</MQ_Tooltip>
                    </div>
                    {{ $route.params.userName == globalStore.userProfile.username ? globalStore.userProfile.username : globalStore.showProfile.username }} 
                    <div class="relative">
                        <i @click="showPreviousUsername = !showPreviousUsername" :class="showPreviousUsername ? '-scale-100' : ''"
                            class="fa-solid fa-caret-down text-xs sm:text-sm mb-1 cursor-pointer hover:text-MQ_light relative peer z-50">
                        </i>
                        <div @mouseleave ="showPreviousUsername = false" v-if="showPreviousUsername" 
                            class="absolute left-4 -top-12 z-50 w-fit h-fit bg-MQ_dark bg-opacity-40 p-2 rounded-md gap-1 flex flex-col
                                text-MQ_light font-normal cursor-default text-xs">
                            <div class="whitespace-nowrap text-xs sm:text-sm"> Previous usernames: </div>
                            <div v-for="u in ($route.params.userName == globalStore.userProfile.username ? globalStore.userProfile.former_usernames : globalStore.showProfile.former_usernames)">{{u}}</div>
                        </div>
                    </div>
                </div>
                <!--DESCRIPTION-->
                <div class="text-MQ_light text-xs sm:text-sm w-full grow relative drop-shadow-MQ | transition-all duration-300"> 
                    <textarea v-if="$route.params.userName == globalStore.userProfile.username" v-model="globalStore.userProfile.profile.description" placeholder=" " :disabled="!globalStore.editing"
                        class="block w-full text-xs sm:text-sm bg-MQ_dark rounded-t-md appearance-none absolute -mx-1 sm:-mx-2 p-1 sm:p-2 z-10
                        outline-none peer caret-MQ_light resize-none | transition-all duration-300 border-MQ_light border-opacity-5 focus:border-opacity-25" :maxlength="1000" rows="4"
                        :class="[globalStore.editing ? 'bg-opacity-10 border' : 'bg-opacity-0', submitting || type != 'none' ? 'h-0 opacity-0 delay-0' : 'h-full opacity-100']"></textarea>
                    <textarea v-else v-model="globalStore.showProfile.profile.description" placeholder=" " :disabled="!globalStore.editing"
                        class="block w-full text-xs sm:text-sm bg-MQ_dark rounded-t-md appearance-none absolute -mx-1 sm:-mx-2 p-1 sm:p-2 z-10
                        outline-none peer caret-MQ_light resize-none | transition-all duration-300 border-MQ_light border-opacity-5 focus:border-opacity-25" :maxlength="1000" rows="4"
                        :class="[globalStore.editing ? 'bg-opacity-10 border' : 'bg-opacity-0', submitting || type != 'none' ? 'h-0 opacity-0 delay-0' : 'h-full opacity-100']"></textarea>    
                    <img class="absolute | animate-spin_slow transition-all duration-500"
                        src="@/assets/Logos/macroquiet_logo_icon.png"
                        :class="submitting ? 'h-16 opacity-100 delay-500' : 'h-0 opacity-0 delay-0'">
                    <MQ_alert :show="type == 'warning'" color="rgb(220, 38, 68)" icon="fa-solid fa-triangle-exclamation"
                        class="absolute w-full h-14 sm:h-auto top-0 text-xs sm:text-lg">
                        <b>{{ response }}!</b>
                    </MQ_alert>
                    <MQ_alert :show="type == 'success'" color="rgb(12, 173, 134)" icon="fa-solid fa-circle-check"
                        class="absolute w-full h-14 sm:h-auto top-0 text-xs sm:text-lg">
                        <b>{{ response }}</b>
                    </MQ_alert>
                </div>
            </div>
    
        </div>

        <div v-if="$route.params.userName == globalStore.userProfile.username" class="flex flex-col text-center ml-1">
            <div class="px-5 py-1.5 mr-2 sm:mr-4 mb-4 | text-xs sm:text-sm whitespace-nowrap | bg-transparent | text-MQ_light overflow-hidden flex justify-center items-center
                	border-MQ_red border-2 rounded | transition-all duration-300 | hover:bg-MQ_red hover:text-MQ_dark hover:font-bold cursor-pointer drop-shadow-MQ"
                    :class="[!submitting && type == 'none' && globalStore.editing ? 'opacity-100 h-8 sm:h-9' : 'opacity-0 h-0 pointer-events-none']"
                @click="cancel()">
                Cancel
            </div>
            <div class="px-5 py-1.5 mr-2 sm:mr-4 mb-4 | text-xs sm:text-sm whitespace-nowrap | bg-transparent | text-MQ_light drop-shadow-MQ
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
import MQ_Tooltip from '@/components/Global/MQ_Tooltip.vue';

let wait = function (seconds) { return new Promise((resolveFn) => { setTimeout(resolveFn, seconds * 1000); }); };

export default {
    name: "MQ_UserCoverAndIcon",  
    components: { MQ_textAreaInput, MQ_alert, MQ_Tooltip },
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
            if (this.$route.params.userName == this.globalStore.userProfile.username) {           
                if (!this.globalStore.editing) {  
                    if (this.globalStore.userProfile.profile.image.avatar == '') return this.userIcon;
                    return this.globalStore.userProfile.profile.image.avatar;
                }
                if (this.globalStore.userProfile.profile.image.avatar == '') return this.userIcon;
                else if (typeof (this.globalStore.userProfile.profile.image.avatar) == "string") return this.globalStore.userProfile.profile.image.avatar;
                let file = URL.createObjectURL(this.globalStore.userProfile.profile.image.avatar);
                return file;
            } else {
                if (this.globalStore.showProfile.profile.image.avatar == '') return this.userIcon; 
                return this.globalStore.showProfile.profile.image.avatar;
            }
        },
        readImageCover() {
            if (this.$route.params.userName == this.globalStore.userProfile.username) {        
                if (!this.globalStore.editing) {
                    if (this.globalStore.userProfile.profile.image.cover == '') return this.userCover;
                    return this.globalStore.userProfile.profile.image.cover;
                }
                if (this.globalStore.userProfile.profile.image.cover == '') return this.userCover;
                else if (typeof (this.globalStore.userProfile.profile.image.cover) == "string") return this.globalStore.userProfile.profile.image.cover;
                let file = URL.createObjectURL(this.globalStore.userProfile.profile.image.cover);
                return file;
            } else {
                if (this.globalStore.showProfile.profile.image.cover == '') return this.userCover; 
                return this.globalStore.showProfile.profile.image.cover;
            }
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