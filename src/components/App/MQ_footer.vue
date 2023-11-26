<template>
    <div class="w-full z-50 | bg-MQ_dark bg-opacity-75 drop-shadow-MQ | flex flex-col justify-center items-center | pt-2">

        <div class="flex flex-col justify-center items-center">
            <b class="text-MQ_red text-sm mb-1">MacroQuiet Game Development</b>

            <div class="text-MQ_light text-opacity-75 text-xs flex justify-center items-center">
                <RouterLink class="mr-1 underline cursor-pointer text-MQ_green hover:text-MQ_lighter" to="/privacy-policy">
                    Privacy policy
                </RouterLink>
                - Copyright 
                <div class="ml-1 text-lg -mb-2 -mt-2 Poppins">©</div>{{ new Date().getFullYear() }}
            </div>

            <MQ_h2_small/>

            <div class="flex justify-center w-full items-center gap-3">
                <a href="https://www.facebook.com/MacroQuiet-107101702108343" target="_blank">
                    <i class="text-MQ_light hover:text-MQ_red fa-brands fa-facebook text-xl opacity-80 | transition-all duration-300"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCCZgds9-ACGOKfnwk8gQBTA" target="_blank">
                    <i class="text-MQ_light hover:text-MQ_red fa-brands fa-youtube text-xl opacity-80 | transition-all duration-300"></i>
                </a>
                <a href="https://twitter.com/MacroQuiet" target="_blank">
                    <i class="text-MQ_light hover:text-MQ_red fa-brands fa-x-twitter text-xl opacity-80 | transition-all duration-300"></i>
                </a>
                <a href="https://www.buymeacoffee.com/macroquiet" target="_blank">
                    <i class="text-MQ_light hover:text-MQ_red fa-solid fa-mug-hot text-xl opacity-80 | transition-all duration-300"></i>
                </a>
            </div>
        </div>
        
    </div>
</template>

<script>
import MQ_h2_small from '@/components/Global/MQ_h2/MQ_h2_small.vue';

export default {
    name: "MQ_footer",
    components: { MQ_h2_small }
}
</script>

<style>
.coffe:hover {
    filter: invert(49%) sepia(19%) saturate(1825%) hue-rotate(314deg) brightness(91%) contrast(106%);
}
</style>