<template>
    <h2 class="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl | drop-shadow-MQ | flex justify-center items-center
        py-4 xs:py-4 sm:py-6 md:py-8 lg:py-12 | transition-all duration-300"> 

        <div class="grow | mr-8 xs:ml-2 | sm:mr-12 sm:ml-4 | md:mr-14 md:ml-12 | lg:ml-16 | xl:ml-28 | 2xl:mr-16 2xl:ml-32 | h-0.5 sm:h-1 | rounded-full bg-gradient-to-l from-MQ_lighter via-MQ_light to-transparent opacity-75 relative flex items-center | transition-all duration-500">

            <div class="h-0.5 sm:h-1 | w-4 sm:w-6 | absolute | -right-3 sm:-right-5 | -bottom-1.5 sm:-bottom-2 | bg-MQ_lighter rotate-45 rounded-full | transition-all duration-500"></div>
            <div class="h-0.5 sm:h-1 | w-4 sm:w-6 | absolute | -right-3 sm:-right-5 | -top-1.5 sm:-top-2 | bg-MQ_lighter -rotate-45 rounded-full | transition-all duration-500"></div>

            <div class="h-4 sm:h-5 | w-4 sm:w-5 | absolute | -mr-1 | -right-5 sm:-right-8 | border-MQ_lighter | border-2 sm:border-3 | rotate-45 rounded-sm | transition-all duration-500"></div>
            <div class="h-1.5 w-1.5 sm:h-2 | sm:w-2 | absolute | -mr-[5px] sm:-mr-4 | -right-3.5 bg-MQ_lighter rotate-45 rounded-sm | transition-all duration-500"></div>

        </div>

        <div class="text-MQ_light font-bold text-center | transition-all duration-500">{{ text }}</div>

        <div class="grow | ml-8 xs:mr-2 | sm:ml-12 sm:mr-4 | md:ml-14 md:mr-12 | lg:mr-16 | xl:mr-28 | 2xl:ml-16  2xl:mr-32 | h-0.5 sm:h-1 | rounded-full bg-gradient-to-r from-MQ_lighter via-MQ_light to-transparent opacity-75 relative flex items-center | transition-all duration-500">
            
            <div class="h-0.5 sm:h-1 | w-4 sm:w-6 | absolute | -left-3 sm:-left-5 | -top-1.5 sm:-top-2 | bg-MQ_lighter rotate-45 rounded-full | transition-all duration-500"></div>
            <div class="h-0.5 sm:h-1 | w-4 sm:w-6 | absolute | -left-3 sm:-left-5 | -bottom-1.5 sm:-bottom-2 | bg-MQ_lighter -rotate-45 rounded-full | transition-all duration-500"></div>

            <div class="h-1.5 w-1.5 sm:h-2 | sm:w-2 | absolute | -ml-[5px] sm:-ml-4 | -left-3.5 bg-MQ_lighter rotate-45 rounded-sm | transition-all duration-500"></div>
            <div class="h-4 sm:h-5 | w-4 sm:w-5 | absolute | -ml-1 | -left-5 sm:-left-8 | border-MQ_lighter | border-2 sm:border-3 | rotate-45 rounded-sm | transition-all duration-500"></div>

        </div>

    </h2>
</template>
<script>
export default {
    name: "MQ_h2",
    props: {
        text: String
    }
}
</script>