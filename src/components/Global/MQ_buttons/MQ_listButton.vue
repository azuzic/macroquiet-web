<template>
    <div class="flex h-min cursor-pointer group | transition-all duration-300" :class="selected ? 'rounded-full bg-MQ_red | px-3 -my-1 pt-1.5 pb-0.5' : ''">
        <i class="text-xl mr-2 | transition-all duration-300" :class="selected ? 'text-MQ_darkhover fa-solid fa-'+icon+'' : 'text-MQ_red fa-solid fa-' + icon + ''"></i>
        <div class="text-sm h-min flex flex-col items-center" @click="link ? scroll(link) : ''">
            <b class="transition-all duration-300" :class="selected ? 'text-MQ_darkhover' : 'text-MQ_light group-hover:tracking-widest'"> {{text}} </b>
            <span class="h-[3px] w-0 | rounded-full | opacity-50 | transition-all duration-300"
                :class="selected ? '' : 'group-hover:w-full group-hover:bg-MQ_red group-hover:opacity-100'"></span>
        </div>
    </div>
</template>

<script>
let wait = function (seconds) { return new Promise((resolveFn) => { setTimeout(resolveFn, seconds * 1000); }); };
export default {
    name: "MQ_listButton",
    props: { 
        selected: Boolean,
        icon: String,
        text: String,
        link: String
    },
    methods: {
        async scroll(id) {
            if (id == "contact-us") {
                this.$router.push({ path: "/contact-us" }).catch(() => { });
                return;
            }
            if (this.$route.name != "Home") {
                this.$router.push({ path: "/", replace: true }).catch(() => { });
                await wait(0.1);
            }

            if (id == null) return;

            try {
                document.getElementById(id).scrollIntoView({ behavior: "smooth", });
                this.drawer = false;
            } catch (e) { }
        },
    }
}
</script>