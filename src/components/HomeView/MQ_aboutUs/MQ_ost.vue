<template>
    <div id="news" class="relative">
        <MQ_h2 :text="title"/>

        <div class="snap-x snap-proximity flex w-0 min-w-full grow justify-center items-center px-4 sm:px-16 overflow-x-scroll gap-8 pb-16">
            <iframe v-for="o in ost" class="aspect-video rounded-lg drop-shadow-MQ h-32 sm:h-48 xl:h-64 transition-all duration-300
                border-3 border-MQ_dark hover:border-MQ_red opacity-80 hover:opacity-100" allowfullscreen :src="o">
            </iframe>
        </div>

    </div>
</template>

<script>
import MQ_h2 from "@/components/Global/MQ_h2/MQ_h2.vue";
export default {
    name: "MQ_ost",
    components: { MQ_h2 },
    props: { title: String, ost: Array }
}
</script>