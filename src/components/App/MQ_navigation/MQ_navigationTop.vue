<script setup>
import { useGlobalStore } from '@/stores/globalStore';
const globalStore = useGlobalStore()
</script>
<template>
    <div class="w-full h-16 bg-MQ_dark flex p-3 bg-opacity-70 hover:bg-opacity-80 fixed top-0 z-[1000] drop-shadow-md | transition-all duration-300">

        <MQ_logo />

        <!-- TOP LINKS -->
        <div class="flex overflow-hidden | pt-0 md2:pt-2 ml-12 lg:ml-32 | items-center | gap-4 lg:gap-8 | md:grow h-0 md2:h-full | transition-all duration-300">
            <MQ_listButton v-for="link in links" :key="link.title" :icon="link.icon" :link="link.to" :text="link.title" />
        </div>

        <!-- LOG IN -->
        <div v-if="!globalStore.userLocalStorage.token" class="flex grow md:grow-0 items-center justify-end | transition-all duration-300">
            <router-link to="/login" class="px-5 py-1.5 | mr-2 lg:mr-8 | text-sm whitespace-nowrap | bg-transparent hover:bg-MQ_red | text-MQ_light hover:text-MQ_dark | hover:font-bold | border-MQ_red border-2 rounded-full | transition-all duration-300">
                LOG IN
            </router-link>
        </div>
        <MQ_profileIcon v-else/>

    </div>
</template>

<script>
import MQ_logo from "./MQ_logo.vue";
import MQ_profileIcon from "./MQ_profileIcon.vue";
import MQ_listButton from "@/components/Global/MQ_buttons/MQ_listButton.vue";

export default {
    name: "MQ_navigationTop",
    components: { MQ_logo, MQ_profileIcon, MQ_listButton },
    props: { links: Array },
};
</script>