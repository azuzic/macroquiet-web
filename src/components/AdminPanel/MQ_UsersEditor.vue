<template>
    <div class="flex flex-col w-full p-4 gap-4">
        <div class="w-full text-center px-8">
            <MQ_h2_small :white="true" text=" ">
                <p class="text-base sm:text-lg md:text-xl text-MQ_light">Macroquiet users</p>
                <p class="text-xs text-MQ_red">Click user to open profile</p>
            </MQ_h2_small>
            <div class="w-full flex flex-col gap-1">
                <div v-for="(user, i) in allUsers" class="flex flex-col text-MQ_light justify-center items-start">
                    <div class="flex text-MQ_light justify-start items-center">

                        <div class="text-MQ_light font-bold text-2xl w-16">{{ i + 1 + "." }}</div>
                        <img class="h-7 aspect-square rounded-full mr-6" src="https://picsum.photos/100/100" alt=""> 

                        <RouterLink :to="'/user/'+ user.username">
                            <div class="text-MQ_red text-xl font-bold hover:underline cursor-pointer w-48 text-left"> {{ user.username }} </div> 
                        </RouterLink>

                        <div v-for="(game, i) in user.profile.games" class="flex text-lg mr-2"> 
                            <div class="mr-1 font-bold"> {{ i+1+"." }}</div>
                            <RouterLink :to="'/games/' + game.name">
                                <div class="text-MQ_red hover:underline cursor-pointer"> {{ game.name }} </div>
                            </RouterLink>
                        </div>
                        
                    </div>
                    <hr class="border-t-[1px] border-slate-800 relative z-10 w-full mt-1"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MQ_h2 from "@/components/Global/MQ_h2/MQ_h2.vue";
import MQ_timelineCardEdit from "@/components/HomeView/MQ_timeline/MQ_timelineCardEdit.vue";
import MQ_h2_small from "../Global/MQ_h2/MQ_h2_small.vue";
import Draggable from "vue3-draggable";
import { useGlobalStore } from '@/stores/globalStore'
import MQ_quill from "../Global/MQ_inputs/MQ_quill.vue";
import { Admin } from "@/services";

export default {
    name: "MQ_UsersEditor",
    components: { MQ_h2, MQ_timelineCardEdit, MQ_h2_small, Draggable, MQ_quill },
    data() {
        return {
            allUsers: "",
        }
    },
    async mounted() {
        this.allUsers = await Admin.data.getAllUsers;
        this.allUsers = this.allUsers.data;
    },  
    setup() {
        const globalStore = useGlobalStore()
        return { globalStore }
    },
}
</script>