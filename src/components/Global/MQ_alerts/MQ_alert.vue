<template>
    <div class="grow flex items-center overflow-hidden | bg-MQ_dark bg-opacity-25 drop-shadow-MQ | py-4 px-4 | text-sm rounded-md border-[1px] gap-4 | transition-all duration-500"
        :class="show ? 'opacity-100 delay-500' : 'opacity-0'"
        :style="'color: ' + color + '; border-color: ' + color + ';v'">
        <i :class="icon" class="text-2xl"></i> 
        <div> <slot></slot> </div>
    </div>
</template>

<script>
export default {
    name: "MQ_alert",
    props: { 
        show: Boolean,
        icon: String,
        color: String
    },
}
</script>