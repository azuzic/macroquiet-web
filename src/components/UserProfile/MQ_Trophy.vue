<script setup>
import hiddenTrophy from '@/assets/gameCards/trophies/hidden_trophy.svg'
</script>
<template>
    <div class="flex | transition-all duration-500" :class="expandedTrophies ? 'h-fit' : 'h-14 aspect-square'">
        <!--IMAGE-->
        <div :style="'background-image: url(' + (trophy.unlocked ? trophy.image : hiddenTrophy) + ')'"
            class="aspect-square bg-center bg-cover rounded bg-MQ_dark bg-opacity-75 | border border-MQ_blue hover:border-MQ_red
        rendering-pixelated | transition-all duration-300" :class="expandedTrophies ? 'h-32' : 'h-14'"></div>
        <!--DATA-->
        <div v-if="expandedTrophies" class="flex flex-col gap-2 | transition-all duration-500 h-32">
            <div class="text-lg pl-4 | transition-all duration-300" :class="trophy.unlocked ? 'text-MQ_green' : 'text-MQ_red'">{{ trophy.name }}</div>
            <div v-if="trophy.unlocked" class="text-xs pl-4 text-MQ_lighter | transition-all duration-500"> 27.08.2022. </div>
            <div class="text-xs pl-4 text-MQ_light opacity-75 | transition-all duration-500 overflow-auto h-full"> 
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MQ_Trophy",
    props: { trophy: Object, expandedTrophies: Boolean },
}
</script>