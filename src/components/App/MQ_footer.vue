<template>
    <div class="bottom-0 w-full z-0 | bg-MQ_dark bg-opacity-75 drop-shadow-MQ | flex flex-col justify-center items-center | pt-2">

        <div class="flex flex-col justify-center items-center">
            <b class="text-MQ_red text-sm mb-1">MacroQuiet Game Development</b>
            <div class="text-slate-400 text-xs flex justify-center items-center">Copyright <div class="ml-1 text-lg -mb-2 -mt-2">©</div> {{ new Date().getFullYear() }}</div>

            <MQ_h2_small/>

            <div class="flex justify-center w-full items-center gap-3">
                <a href="https://www.facebook.com/MacroQuiet-107101702108343" target="_blank">
                    <i class="text-MQ_light hover:text-MQ_red fa-brands fa-facebook text-xl opacity-80 | transition-all duration-300"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCCZgds9-ACGOKfnwk8gQBTA" target="_blank">
                    <i class="text-MQ_light hover:text-MQ_red fa-brands fa-youtube text-xl opacity-80 | transition-all duration-300"></i>
                </a>
                <a href="https://twitter.com/MacroQuiet" target="_blank">
                    <i class="text-MQ_light hover:text-MQ_red fa-brands fa-twitter text-xl opacity-80 | transition-all duration-300"></i>
                </a>
                <a href="https://www.buymeacoffee.com/macroquiet" target="_blank">
                    <img class="h-[28px] min-w-[28px] mb-1.5 -ml-2 opacity-75 | transition-all duration-300 | coffe" src="src/assets/icons/buymeacoffee.png">
                </a>
            </div>
        </div>
        
    </div>
</template>

<script>
import MQ_h2_small from '../Global/MQ_h2_small.vue';

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