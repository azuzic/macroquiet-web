<template>
    <div id="about" class="relative bg-gradient-to-b from-MQ_dark to-MQ_darkblue w-full opacity-90">
        <hr class="border-2 border-MQ_light drop-shadow-MQ relative">
        <div class="flex flex-col items-center">

            <MQ_h2 class="w-full" text="ABOUT US"/>

            <div class="text-center text-MQ_light px-2 max-w-2xl">
                <h1 class="text-lg md:text-xl | transition-all duration-500">We are a two person Indie Game Developer Studio from <b class="text-red-400">Cro</b><b class="text-MQ_lighter">at</b><b class="text-blue-400">ia</b>.</h1>
                <h2 class="text-sm md:text-base my-2 md:my-4 | transition-all duration-500">
                  It all started in the summer of 2021. when two friends and colleagues decided they wanted to create video games and fulfil their lifelong dreams.
                </h2>
                <h2 class="text-lg md:text-xl | transition-all duration-500">
                  Meet <a class="text-MQ_red cursor-pointer group"> @<b class="group-hover:underline">blaskec</b> </a> and <a class="text-MQ_red cursor-pointer group"> @<b class="group-hover:underline">zuza</b> </a> now!
                </h2>
            </div>

            <div class="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-20 py-4">
                <MQ_portrait :imageSrc="'src/assets/portraits/Portret_Luka_Big-noBG.png'"      :name="'Blaskec'"   :userName="'blaskec'"/>
                <MQ_portrait :imageSrc="'src/assets/portraits/Portret_Alesandro_Big-noBG.png'" :name="'Zuza'"      :userName="'zuza'"/>
            </div>

        </div>
        <hr class="border-2 border-MQ_light drop-shadow-MQ relative">
    </div>
</template>

<script>
import MQ_h2 from '@/components/Global/MQ_h2/MQ_h2.vue';
import MQ_portrait from '@/components/HomeView/MQ_aboutUs/MQ_portrait.vue';

export default {
    name: "MQ_aboutUs",
    components: { MQ_h2, MQ_portrait },
};
</script>