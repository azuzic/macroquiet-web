<template>
    <h2 class="drop-shadow-MQ | w-full flex justify-center items-center pt-2 pb-1 | transition-all duration-300 | relative"> 

        <div v-if="white" class="w-full flex justify-center items-center">
            <div class="grow h-0.5 rounded-full bg-gradient-to-l opacity-75 relative flex items-center"
            :class="text ? 'from-transparent via-slate-400 to-slate-300' : 'from-slate-500 via-slate-400 to-slate-300'">

                <div class="h-0.5 w-3 absolute -left-2 -top-1 bg-slate-300 rotate-45 rounded-full"></div>
                <div class="h-0.5 w-3 absolute -left-2 -bottom-1 bg-slate-300 -rotate-45 rounded-full"></div>

                <div class="h-1 w-1 absolute -ml-3 -left-0.5 bg-slate-100 rotate-45 rounded-sm"></div>
                <div class="h-3 w-3 absolute -ml-2.5 -left-2 border-slate-200 border-2 rotate-45 rounded-sm"></div>

            </div>
            <div v-if="text" class="text-MQ_light font-bold text-sm mx-3">{{ text }}</div>
            <div class="grow h-0.5 rounded-full bg-gradient-to-l opacity-75 relative flex items-center"
                :class="text ? 'from-slate-300 via-slate-400 to-transparent' : 'from-slate-300 via-slate-400 to-slate-500'">

                <div class="h-0.5 w-3 absolute -right-2 -bottom-1 bg-slate-300 rotate-45 rounded-full"></div>
                <div class="h-0.5 w-3 absolute -right-2 -top-1 bg-slate-300 -rotate-45 rounded-full"></div>

                <div class="h-3 w-3 absolute -mr-2.5 -right-2 border-slate-200 border-2 rotate-45 rounded-sm"></div>
                <div class="h-1 w-1 absolute -mr-3 -right-0.5 bg-slate-100 rotate-45 rounded-sm"></div>

            </div>
        </div>

        <div v-else class="grow h-0.5 rounded-full bg-gradient-to-l from-slate-600 via-slate-900 to-slate-600 opacity-75 relative flex items-center">

            <div class="h-0.5 w-3 absolute -left-2 -top-1 bg-slate-600 rotate-45 rounded-full"></div>
            <div class="h-0.5 w-3 absolute -left-2 -bottom-1 bg-slate-600 -rotate-45 rounded-full"></div>

            <div class="h-1 w-1 absolute -ml-3 -left-0.5 bg-slate-400 rotate-45 rounded-sm"></div>
            <div class="h-3 w-3 absolute -ml-2.5 -left-2 border-slate-500 border-2 rotate-45 rounded-sm"></div>

            <div class="h-0.5 w-3 absolute -right-2 -bottom-1 bg-slate-600 rotate-45 rounded-full"></div>
            <div class="h-0.5 w-3 absolute -right-2 -top-1 bg-slate-600 -rotate-45 rounded-full"></div>

            <div class="h-3 w-3 absolute -mr-2.5 -right-2 border-slate-500 border-2 rotate-45 rounded-sm"></div>
            <div class="h-1 w-1 absolute -mr-3 -right-0.5 bg-slate-400 rotate-45 rounded-sm"></div>

        </div>

    </h2>
</template>
<script>
export default {
    name: "MQ_h2_small",
    props: {
        white: Boolean,
        text: String
    }
}
</script>