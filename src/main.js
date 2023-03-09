import { createApp } from "vue";
import { Vue3Mq } from "vue3-mq";
import App from "./App.vue";
import router from "./router";

import "./style.css";

const app = createApp(App);

app.use(router);
app.use(Vue3Mq, {
    breakpoints: {
        xxs: 0,
        xs: 480,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
    },
});
app.mount("#app");
