<template>
    <div class="grow flex flex-col justify-between items-center">
        <div class="grow flex flex-col justify-center items-center">
            <div class="flex flex-col justify-center items-center px-8 w-full xs:w-[500px]">
                <img class="rendering-pixelated h-44 sm:h-52 lg:h-64 z-10" src="src/assets/icons/trader_villager_idle.gif">
                <div class="bg-black w-[88px] sm:w-[104px] lg:w-[128px] h-[2px] sm:h-[3px] lg:h-1"></div>
                <MQ_h2_small :white="true" text="This is not the page you are looking for." class="mb-8 mt-2 px-4"/>
            </div>
        </div>
        <MQ_footer/>
    </div>
</template>

<script>
import MQ_footer from '../components/App/MQ_footer.vue';
import MQ_h2_small from '../components/Global/MQ_h2/MQ_h2_small.vue';

export default {
    name: "PageNotFound",
    components: { MQ_h2_small, MQ_footer }
}
</script>