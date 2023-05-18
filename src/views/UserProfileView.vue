<script setup>
import { useGameStore } from '@/stores/gameStore'
const gameStore = useGameStore();
</script>

<template>
    <div class="grow flex flex-col justify-between items-start absolute overflow-y-auto">
        <div class="flex flex-col | justify-center items-center | w-full">

            <!--USER COVER & ICON-->
            <MQ_UserCoverAndIcon/>

            <hr class="border-2 border-MQ_light drop-shadow-MQ relative z-10 w-full">

            <div class="flex text-MQ_light w-full px-96 mt-4 mb-16">
                <div class="w-full h-full relative z-10">
                    <!--PLAYED GAMES-->
                    <div class="px-4 py-2 flex flex-col gap-6">

                        <MQ_ProfileBlock>Played games</MQ_ProfileBlock>

                        <div class="flex flex-col gap-6">
                            <MQ_PlayedGame v-for="game in gameStore.games" :game="game"/>
                        </div>

                        <MQ_ProfileBlock>User settings</MQ_ProfileBlock>
                        <MQ_ProfileBlock>
                            <div class="flex justify-between mt-4">
                                <div class="flex">
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
import MQ_footer from '@/components/App/MQ_footer.vue';
import MQ_UserCoverAndIcon from '@/components/UserProfile/MQ_UserCoverAndIcon.vue';
import MQ_PlayedGame from '@/components/UserProfile/MQ_PlayedGame.vue';
import MQ_ProfileBlock from '../components/UserProfile/MQ_ProfileBlock.vue';

export default {
    name: "UserProfileView",
    components: { MQ_footer, MQ_UserCoverAndIcon, MQ_PlayedGame, MQ_ProfileBlock },
}
</script>