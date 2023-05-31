<template>
    <div class="opacity-0 peer-hover:opacity-100 group-hover/tooltip:opacity-100 | transition-all duration-300 | absolute z-50 left-1/2 -translate-x-1/2 -top-0 pointer-events-none">
        <div class="transition-all duration-300 | absolute z-50 left-1/2 -translate-x-1/2 bottom-2 | pointer-events-none 
            w-fit h-fit bg-MQ_dark bg-opacity-60 rounded-md | py-1 px-3 text-MQ_light whitespace-nowrap text-xs cursor-default border border-MQ_light border-opacity-10">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "MQ_Tooltip",
}
</script>