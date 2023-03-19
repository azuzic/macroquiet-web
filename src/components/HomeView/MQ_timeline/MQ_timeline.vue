<script setup>
    import { useGlobalStore } from '@/stores/globalStore'
    const globalStore = useGlobalStore()
</script>

<template>
    <div id="news" class="relative">
        <MQ_h2 text="WHAT'S BEEN GOING ON"/>

        <div class="snap-x snap-proximity flex w-0 min-w-full grow h-[760px] items-center pl-16 pr-48 overflow-x-scroll">
            <MQ_timelineCard v-for="t, id in globalStore.timeline" :t="t" :id="id" :l="globalStore.timeline.length"> {{ t.text }} </MQ_timelineCard>
        </div>

    </div>
</template>

<script>
import MQ_h2 from "@/components/Global/MQ_h2/MQ_h2.vue";
import MQ_timelineCard from "./MQ_timelineCard.vue";

export default {
    name: "MQ_timeline",
    components: { MQ_h2, MQ_timelineCard },
}
</script>

<style>
</style>