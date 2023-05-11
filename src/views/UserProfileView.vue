<template>
    <div class="h-full flex flex-col">
        <div class="h-[240px] xs:h-[280px] sm:h-[340px] md:h-[400px] | overflow-hidden relative | transition-all duration-300">
            <carousel :items-to-show="1" :wrapAround="true" :autoplay="0" :transition="0" :mouseDrag="false" :touchDrag="false" class="h-full relative">
                <slide class="h-full">
                    <div class="h-full w-full overflow-hidden bg-cover bg-center relative" :style="'background-image: url(../src/assets/bg.jpg)'">
                        <div class="w-full h-full bg-gradient-to-t from-MQ_blue opacity-70 absolute top-0"></div>

                        <div class="flex absolute left-64 bottom-2 justify-center items-baseline">
                            <div class="w-32 aspect-square overflow-hidden drop-shadow-MQ z-50">
                                <img class="absolute w-full rendering-pixelated" src="../assets/portraits/Portret_Alesandro_Big-noBG.png" alt="">
                            </div>
                            <div class="text-MQ_lighter relative drop-shadow-MQ"> 
                                <div class="absolute text-3xl  left-8 -top-14 text-MQ_red font-bold"> {{ user.username }} </div>
                                <div class="absolute text-base left-8 -top-6  text-MQ_light" > {{ user.email }} </div>
                            </div>
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>

        <hr class="border-2 border-MQ_light drop-shadow-MQ relative z-10">

        <div class="flex px-64 text-MQ_light grow mb-48 relative overflow-x-hidden">
            <div class="sss absolute pr-[512px] w-full h-full flex flex-col-reverse z-50">
                <div class="sss2 z-50"> </div>
            </div>
            <!--hr class="border-2 border-MQ_light drop-shadow-MQ relative grow h-full"/-->
            <div class="w-full h-full bg-gradient-to-b from-MQ_dark to-MQ_darkblue opacity-90 px-8 pt-4 flex flex-col">
                <div class="text-3xl text-MQ_red font-bold my-4"> About me </div>
                <div class="text-base">
                    {{ user.profile.description }} <br>
                </div>
                <div class="text-3xl text-MQ_red font-bold my-4"> Played games </div>
                 <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
                     <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
            </div>
            <!--hr class="border-2 border-MQ_light drop-shadow-MQ relative grow h-full"/-->
        </div>
        
        
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel'
import MQ_h2 from '@/components/Global/MQ_h2/MQ_h2.vue';

import { Auth } from "@/services";
import MQ_h2_small from '../components/Global/MQ_h2/MQ_h2_small.vue';

export default {
    name: "UserProfileView",
    components: { Carousel, Slide, MQ_h2, MQ_h2_small },
    data() { 
        return {
            currentUser: null,
            auth: Auth.state,
            user: {
                username: "",
                email: "",
                admin: false,
                profile: {
                    description: "",
                    games: [],
                },
            },
            canEdit: false,
            tokenUser: Auth.currentUser.getCurrentUserData.username,
        } 
    },
    async mounted() {
        this.currentUser = this.$route.params.userName;

        await this.getUserDetails();
    },
    methods: {
        async getUserDetails() {
            if (this.auth.authenticated) {
                let result = await Auth.getUserDetails(this.currentUser);
                this.user = result.data.userData;

                if (this.tokenUser === this.$route.params.userName) {
                    this.canEdit = true;
                }
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.sss {
    .sss2 {
        pointer-events: none;
        background-image: linear-gradient(to bottom, rgba(255,255,255,0), rgba(13, 26, 36, 1) 90%);
        height: 1em;
    }
}
</style>