<script setup>
import BubbleB from "@/assets/portraits/BubbleB/BubbleB.gif";
import BubbleZ from "@/assets/portraits/BubbleB/BubbleZ.gif";
import BubbleBR from "@/assets/portraits/BubbleB/BubbleBR.gif";
import BubbleZR from "@/assets/portraits/BubbleB/BubbleZR.gif";
</script>
<template>
    <div class="relative" v-on:mouseenter="hover = true" v-on:mouseleave="hover = false">
        <img class="align-end | hover:drop-shadow-pixelArt-2 sm:hover:drop-shadow-pixelArt-3 md:hover:drop-shadow-pixelArt-4 | h-[98px] w-[98px] | sm:h-[147px] sm:w-[147px] | md:h-[196px] md:w-[196px] | my-4 cursor-pointer rendering-pixelated | transition-all duration-300" :src="imageSrc"/> 
        
        <img v-if="userName == 'blaskec'" class="absolute top-0 | -right-14 sm:-right-20 md:-right-28 | align-end | h-[42px] min-w-[76px] | sm:h-[63px] sm:min-w-[114px]  | md:h-[84px] md:min-w-[152px] | my-4 rendering-pixelated | transition-all duration-500" 
            :src="hover ? BubbleB : BubbleBR "/>
        <img v-if="userName == 'zuza'" class="absolute top-0 | -right-14 sm:-right-20 md:-right-28 | align-end | h-[42px] min-w-[76px] | sm:h-[63px] sm:min-w-[114px]  | md:h-[84px] md:min-w-[152px] | my-4 rendering-pixelated | transition-all duration-500" 
            :src="hover ? BubbleZ : BubbleZR "/>
    </div>
</template>

<script>
export default {
    name: "MQ_portrait",
    props: {
        userName: String,
        imageSrc: String,
        name: String
    },
    data() { return { hover: false } }
}
</script>