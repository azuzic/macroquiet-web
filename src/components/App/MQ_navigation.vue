<template>
    <MQ_navigationTop :links="links"/>
    <MQ_navigationSide :links="links"/>
</template>

<script>
import MQ_navigationSide from "./MQ_navigation/MQ_navigationSide.vue";
import MQ_navigationTop from "./MQ_navigation/MQ_navigationTop.vue";
export default {
    name: "MQ_navigation",
    components: { 
        MQ_navigationTop, 
        MQ_navigationSide 
    },
    data() {
        return {
            links: [
                {
                    title: "OUR GAMES",
                    icon: "gamepad",
                    to: "games",
                },
                {
                    title: "ABOUT US",
                    icon: "user",
                    to: "about",
                },
                {
                    title: "NEWS",
                    icon: "newspaper",
                    to: "news",
                },
                {
                    title: "CONTACT US",
                    icon: "address-card",
                    to: "contact-us",
                },
            ],
        }
    },
};
</script>