<template>
    <div class="grow flex flex-col justify-between items-start pt-16 overflow-y-auto">
        <div class="flex grow flex-col items-center justify-top | w-full h-fit | pt-16 pb-32 | px-4 md:px-16 lg:px-32 xl:px-36 2xl:px-64 | transition-all duration-300">
            <MQ_h2 class="w-full mb-4" text="ADMIN PANEL"/>
            <div class="flex justify-center items-center bg-MQ_dark bg-opacity-75 rounded-t-lg w-full py-4 -mt-8 gap-8">
                <MQ_listButton class="z-20" :selected="globalStore.edit == 'CAROUSEL'" @click="globalStore.edit = 'CAROUSEL'" icon="panorama" text="CAROUSEL" />
                <MQ_listButton class="z-20" :selected="globalStore.edit == 'TIMELINE'" @click="globalStore.edit = 'TIMELINE'"  icon="timeline" text="TIMELINE" />
                <MQ_listButton class="z-20" :selected="globalStore.edit == 'USERS'" @click="globalStore.edit = 'USERS'"  icon="users" text="USERS" />
            </div>
            <div :class="globalStore.edit == 'TIMELINE' ? 'bg-opacity-25' : 'bg-opacity-50'" class="flex bg-MQ_dark rounded-b-lg w-full | transition-all duration-300">
                <MQ_CarouselEditor class="w-full h-full" v-if="globalStore.edit == 'CAROUSEL'"/>
                <MQ_TimelineEditor class="w-full h-full" v-if="globalStore.edit == 'TIMELINE'"/>
                <MQ_UsersEditor class="w-full h-full" v-if="globalStore.edit == 'USERS'"/>
            </div>
        </div>
        <MQ_footer/>
    </div>
</template>

<script>
import MQ_CarouselEditor from "@/components/AdminPanel/MQ_CarouselEditor.vue"
import MQ_TimelineEditor from "@/components/AdminPanel/MQ_TimelineEditor.vue"
import MQ_h2 from "@/components/Global/MQ_h2/MQ_h2.vue"
import MQ_listButton from "@/components/Global/MQ_buttons/MQ_listButton.vue"
import { useGlobalStore } from '@/stores/globalStore'
import MQ_UsersEditor from "../components/AdminPanel/MQ_UsersEditor.vue"
import MQ_footer from "../components/App/MQ_footer.vue"

let wait = function (seconds) {
    return new Promise((resolveFn) => {
        setTimeout(resolveFn, seconds * 1000);
    });
};

export default {
    name: "AdminPanel",
    components: { MQ_CarouselEditor, MQ_h2, MQ_listButton, MQ_TimelineEditor, MQ_UsersEditor, MQ_footer },
    setup() {
        const globalStore = useGlobalStore()
        return { globalStore }
    },
    data() {
        return {
            edit: "CAROUSEL",
        }
    },
    async mounted() {
        await wait(0.5);
        this.globalStore.MQupdate();
    },
}
</script>