<template>
    <div class="flex flex-col w-full p-4 gap-4">
        <div class="font-bold w-full text-center px-8">
            <MQ_h2_small :white="true" text=" "><p class="text-base sm:text-lg md:text-xl text-MQ_light">Current Timeline Cards</p></MQ_h2_small>
            <p class="text-xs text-MQ_red">Click cards to edit them</p>
        </div>

        <div class="flex md:grow-0 items-center justify-center | h-16 overflow-hidden | transition-all duration-300">
            <div class="px-5 py-1.5 | text-sm whitespace-nowrap cursor-pointer | bg-transparent hover:bg-MQ_red | text-MQ_light hover:text-MQ_dark | hover:font-bold | border-MQ_red border-2 rounded-full | transition-all duration-300"
                @click="globalStore.addTimelineCard()">
                ADD TIMELINE CARD
            </div>
        </div>

        <div class="snap-x snap-proximity flex w-0 min-w-full grow h-[760px] items-center pl-16 pr-48 overflow-x-scroll">
            <MQ_timelineCardEdit v-for="t, id in globalStore.timeline" :t="t" :id="id" :l="globalStore.timeline.length"/>
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

export default {
    name: "MQ_TimelineEditor",
    components: { MQ_h2, MQ_timelineCardEdit, MQ_h2_small, Draggable, MQ_quill },
    setup() {
        const globalStore = useGlobalStore()
        return { globalStore }
    },
}
</script>