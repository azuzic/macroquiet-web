<template>
    <div id="about" class="relative mb-16">
        <div class="absolute bg-gradient-to-b from-MQ_dark to-MQ_darkblue w-full h-full opacity-90"></div>
        <hr class="border-2 border-MQ_light drop-shadow-MQ relative">
        <div class="flex flex-col items-center pb-12">

            <MQ_h2 class="w-full" :text="title"/>

            <div class="text-center text-MQ_light px-2 max-w-3xl z-50">
                <h1 class="text-base sm:text-lg md:text-xl | transition-all duration-500" :innerHTML="text"></h1>
            </div>

        </div>
        <hr class="border-2 border-MQ_light drop-shadow-MQ relative">
    </div>
</template>

<script>
import MQ_h2 from '@/components/Global/MQ_h2/MQ_h2.vue';

export default {
    name: "MQ_text",
    props: { title: String, text: String },
    components: { MQ_h2 },
};
</script>
<style lang="scss">
.imgg {
    animation: index2 500ms forwards;
    @keyframes index2 {
        0% { z-index: 10; }
        20% { z-index: 10; }
        40% { z-index: 10; }
        60% { z-index: 10; }
        80% { z-index: 10; }
        100% { z-index: 0; }
    }
    &:hover {
        animation: index 500ms forwards;
        @keyframes index {
            0% { z-index: 0; }
            20% { z-index: 10; }
            40% { z-index: 10; }
            60% { z-index: 10; }
            80% { z-index: 10; }
            100% { z-index: 10; }
        }
    }
}
</style>