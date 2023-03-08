<template>
    <div class="bg-MQ_blue overflow-hidden rounded-t-xl w-[400px]">
        
        <div class="flex justify-center items-center overflow-hidden h-48 bg-center bg-contain"
        :style="'background-image: url('+ image +')'"> </div>

        <div class="p-4">
            <div class="w-full text-MQ_red text-xs"> AVAILABLE NOW! </div>
            <div class="w-full text-MQ_light text-3xl pt-2"> <b>STRANDED AWAY</b> </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "MQ_gameCard",
    props: ["availability", "title", "description", "image", "link"],
}
</script>