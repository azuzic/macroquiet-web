<template>
    <div class="flex justify-center items-center absolute w-full h-full z-10">
        <div class="flex justify-center items-center">
            <img class="mr-2 xs:mr-4 | h-24 xs:h-32 sm:h-40 md:h-48 xl:h-64 | transition-all duration-300 | drop-shadow-MQ" src="src/assets/Logos/Stranded_Away_Icon.png" />
            <div class="flex flex-col justify-end | h-24 xs:h-32 sm:h-40 md:h-48 xl:h-64 | transition-all duration-300">
                <div class="text-3xl xs:text-5xl sm:text-6xl md:text-7xl xl:text-8xl | text-MQ_light p-dark drop-shadow-MQ | -mb-2 xs:-mb-1 sm:mb-0 | transition-all duration-300"> Stranded </div>
                <div class="text-3xl xs:text-5xl sm:text-6xl md:text-7xl xl:text-8xl | text-MQ_light p-dark drop-shadow-MQ | -mb-0.5 sm:mb-0 | transition-all duration-300"> Away </div>
                <div class="text-xs xs:text-base sm:text-base md:text-lg xl:text-2xl | text-MQ_light drop-shadow-MQ | transition-all duration-300"> Available now! </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MQ_carouselTitle",
}
</script>