<template>
    <div class="opacity-0 peer-hover:opacity-100 group-hover/tooltip:opacity-100 | transition-all duration-300 | absolute z-50 left-1/2 -translate-x-1/2 bottom-12 | 
        w-fit h-fit bg-MQ_dark bg-opacity-40 rounded-md | py-1 px-3 text-MQ_light whitespace-nowrap text-xs cursor-default border border-MQ_light border-opacity-10">
        <i class="fa-solid fa-play absolute -bottom-4 rotate-90 left-1/2 -translate-x-1/2 text-MQ_green text-opacity-40 text-lg"></i>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "MQ_Tooltip",
}
</script>