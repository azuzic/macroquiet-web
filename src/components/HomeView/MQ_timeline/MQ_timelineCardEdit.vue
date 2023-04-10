<template>
    <div class="h-1 min-w-[256px] mr-5 rounded-full bg-MQ_lighter relative flex items-center">
                
        <div v-if="id == 0" class="h-1 w-4 absolute -left-5 -bottom-1 bg-MQ_lighter rotate-45 rounded-full"></div>
        <div v-if="id == 0" class="h-1 w-4 absolute -left-5 -top-1 bg-MQ_lighter -rotate-45 rounded-full"></div>

        <div v-if="id == 0" class="h-1 w-6 absolute -left-9 -bottom-2 bg-MQ_lighter rotate-45 rounded-full"></div>
        <div v-if="id == 0" class="h-1 w-6 absolute -left-9 -top-2 bg-MQ_lighter -rotate-45 rounded-full"></div>

        <div v-if="id == l - 1" class="h-3 w-3 absolute -right-5 bg-MQ_red rotate-45 rounded-sm"></div>
        <div v-else class="h-2 w-2 absolute -right-3.5 bg-MQ_red rotate-45 rounded-sm"></div>

        <div v-if="id == l - 1" class="h-7 w-7 absolute -right-7 border-MQ_lighter border-3 rotate-45 rounded-sm"></div>
        <div v-else class="h-5 w-5 absolute -right-5 border-MQ_lighter border-3 rotate-45 rounded-sm"></div>

        <div class="absolute -right-[74px] h-32 w-32 | flex justify-center" :class="id % 2 == 0 ? 'bottom-11' : 'top-11'">

            <div v-if="id != l - 1" class="w-1 h-5 rounded-full bg-MQ_lighter absolute flex justify-center items-center" :class="id % 2 == 0 ? '-bottom-8' : '-top-8'">
                <div class="whitespace-nowrap absolute text-sm text-MQ_red font-bold" :class="id % 2 == 0 ? 'top-12' : 'bottom-12'"> {{ t.date }} </div>
                <div @click="globalStore.removeTimelineCard(t._id)" class="absolute drop-shadow-MQ text-MQ_lighter hover:text-MQ_red font-bold text-xl cursor-pointer"
                    :class="id % 2 == 0 ? 'top-[70px]' : 'bottom-[70px]'">
                    <i class="fa-solid fa-trash-can"></i>
                </div>
            </div>
            <div v-else class="w-1 h-4 ml-2 rounded-full bg-MQ_lighter absolute flex justify-center items-center" :class="id % 2 == 0 ? '-bottom-[26px]' : '-top-[26px]'">
                <div class="whitespace-nowrap absolute text-xl text-MQ_red font-bold underline" :class="id % 2 == 0 ? 'top-14' : 'bottom-14'"> {{ t.date }} </div>
                <div @click="globalStore.removeTimelineCard(t._id)" class="absolute drop-shadow-MQ text-MQ_lighter hover:text-MQ_red font-bold text-3xl cursor-pointer"
                    :class="id % 2 == 0 ? 'top-[88px]' : 'bottom-[80px]'">
                    <i class="fa-solid fa-trash-can"></i>
                </div>
            </div>

            <div @click="globalStore.timelineEditing = t._id; globalStore.html = t.text"  class="min-w-fit | snap-center flex flex-col | group | rounded-t-lg | bg-MQ_dark bg-opacity-25 | drop-shadow-md hover:drop-shadow-MQ border-MQ_red border-2 | transition-all duration-500"
                :class="[id % 2 == 1 ? 'self-start flex-col-reverse' : 'self-end flex-col', globalStore.timelineEditing == t._id ? 'border-opacity-100' : 'border-opacity-0']">

                <div class="px-4 pt-2 pb-4 grow flex flex-col bg-MQ_dark min-w-[150px] xs:min-w-[300px] max-w-[300px] xs:max-w-md | transition-all duration-500">
                    <div class="scrollbar-h-1 text-lg | w-full text-slate-300 group-hover:text-slate-200 font-bold pt-1 uppercase | transition-all duration-500 | whitespace-nowrap overflow-x-auto | title"> 
                        <i :class="t.icon" class="text-MQ_red"></i>
                        {{ t.title }} 
                    </div>
                </div>

                <div class="px-4 min-h-full max-h-64 max-w-[440px] overflow-y-auto flex flex-col pt-2 relative">
                    <div class="text-sm | w-full text-slate-400 group-hover:text-slate-300 | text-justify grow | transition-all duration-500" v-html="globalStore.timelineEditing != t._id ? t.text : globalStore.html"></div>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
import { useGlobalStore } from '@/stores/globalStore'
export default {
    name: "MQ_timelineCardEdit",
    components: { },
    props: {
        t: Object,
        id: Number,
        l: Number,
    },
    data() {
        return {
            html: "HTML"
        }
    },
    setup() {
        const globalStore = useGlobalStore()
        return { globalStore }
    },
}
</script>