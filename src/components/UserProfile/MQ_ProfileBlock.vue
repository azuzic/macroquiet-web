<template>
    <div class="text-2xl text-MQ_red font-bold relative z-10 grow">
        <div class="absolute w-full h-full bg-MQ_dark opacity-75 drop-shadow-MQ rounded -z-10"></div>
        <div class="px-4 py-2"> <slot ></slot> </div>        
    </div>
</template>

<script>
export default {
    name: "MQ_ProfileBlock",
}
</script>