<template>
    <div>
        <div class="h-[240px] xs:h-[280px] sm:h-[340px] md:h-[400px] | overflow-hidden relative | transition-all duration-300">
            <carousel :items-to-show="1" :wrapAround="true" :autoplay="0" :transition="0" :mouseDrag="false" :touchDrag="false" class="h-full relative">
                <slide class="h-full">
                    <div class="h-full w-full overflow-hidden bg-cover bg-center relative" :style="'background-image: url(../src/assets/bg.jpg)'">
                        <div class="w-full h-full bg-gradient-to-t from-MQ_blue opacity-50 absolute top-0"></div>

                        <div class="flex absolute left-96 bottom-2 justify-center items-baseline">
                            <div class="w-32 aspect-square overflow-hidden drop-shadow-MQ z-50">
                                <img class="absolute w-full rendering-pixelated" src="../assets/portraits/Portret_Alesandro_Big-noBG.png" alt="">
                            </div>
                            <div class="font-bold text-2xl text-MQ_lighter relative"> 
                                <div class="absolute left-8 -top-10"> {{ user.username }} </div>
                            </div>
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>

        <hr class="border-2 border-MQ_light drop-shadow-MQ relative grow">

        <div id="about" class="relative bg-MQ_dark h-16 w-full opacity-75 drop-shadow-MQ"></div>
        
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel'

import { Auth } from "@/services";

export default {
    name: "UserProfileView",
    components: { Carousel, Slide },
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

<style lang="scss" scoped></style>