<template>
    <div class="grow flex flex-col justify-between items-start absolute overflow-y-auto">
        <div class="flex flex-col | justify-center items-center | w-full">

            <!--USER COVER & ICON-->
            <MQ_UserCoverAndIcon/>

            <hr class="border-2 border-MQ_light drop-shadow-MQ relative z-10 w-full"> 

            <div class="flex text-MQ_light w-full | mt-4 mb-16 | xs:px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-80 3xl:px-96 | transition-all duration-300">
                <div class="w-full h-full relative z-10">
                    <!--PLAYED GAMES-->
                    <div class="px-4 py-2 flex flex-col gap-6">

                        <MQ_ProfileBlock>Played games</MQ_ProfileBlock>

                        <div class="flex flex-col gap-6">
                            <MQ_PlayedGame v-for="game in ($route.params.userName == globalStore.userProfile.username ? globalStore.userProfile.profile.games : globalStore.showProfile.profile.games)" :game="game"/> 
                        </div>
                        <div v-if="$route.params.userName == globalStore.userProfile.username && globalStore.userProfile.profile.games.length < 1 || 
                                    $route.params.userName != globalStore.userProfile.username && globalStore.showProfile.profile.games.length < 1">
                            <img src="https://i.gifer.com/7VE.gif">
                        </div>

                        <MQ_ProfileBlock v-if="$route.params.userName == globalStore.userProfile.username">User settings</MQ_ProfileBlock>
                        <MQ_ProfileBlock v-if="$route.params.userName == globalStore.userProfile.username">
                            <div class="flex justify-center sm:justify-between items-center mt-4 flex-wrap">
                                <div class="flex flex-wrap justify-center items-center">
                                    <RouterLink to="/change-password">
                                        <div class="px-5 py-1.5 mr-4 mb-4 | text-sm whitespace-nowrap | bg-transparent hover:bg-MQ_red | text-MQ_light hover:text-MQ_dark
                                            hover:font-bold | border-MQ_red border-2 rounded | transition-all duration-300 cursor-pointer w-fit">
                                            Change Password
                                        </div>
                                    </RouterLink>
                                    <RouterLink to="/change-username">
                                        <div class="px-5 py-1.5 mr-4 mb-4 | text-sm whitespace-nowrap | bg-transparent hover:bg-MQ_red | text-MQ_light hover:text-MQ_dark
                                            hover:font-bold | border-MQ_red border-2 rounded | transition-all duration-300 cursor-pointer w-fit">
                                            Change Username
                                        </div>
                                    </RouterLink>
                                </div>
                                <div class="px-5 py-1.5 mr-4 mb-4 | text-sm whitespace-nowrap | bg-red-700 hover:bg-MQ_dark | text-MQ_dark hover:text-MQ_lighter
                                        border-MQ_dark border-2 rounded | transition-all duration-300 cursor-pointer w-fit | hover:border-MQ_lighter">
                                    DELETE ACOUNT
                                </div>
                            </div>
                        </MQ_ProfileBlock>

                    </div>
                </div>
            </div>
        
        
            </div>
        <MQ_footer/>
    </div>
</template>

<script>
import { useGameStore } from '@/stores/gameStore'
import { useGlobalStore } from '@/stores/globalStore'
import MQ_footer from '@/components/App/MQ_footer.vue';
import MQ_UserCoverAndIcon from '@/components/UserProfile/MQ_UserCoverAndIcon.vue';
import MQ_PlayedGame from '@/components/UserProfile/MQ_PlayedGame.vue';
import MQ_ProfileBlock from '@/components/UserProfile/MQ_ProfileBlock.vue';

let wait = function (seconds) { return new Promise((resolveFn) => { setTimeout(resolveFn, seconds * 1000); }); };

export default {
    name: "UserProfileView",
    components: { MQ_footer, MQ_UserCoverAndIcon, MQ_PlayedGame, MQ_ProfileBlock },
    setup() {
        const gameStore = useGameStore();
        const globalStore = useGlobalStore();
        return { gameStore, globalStore }
    },
    async mounted() {
        await wait(0.1);
        await this.globalStore.getUserProfile(this.$route.params.userName);;
    }
}
</script>