import { Vue3Mq } from "vue3-mq";
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";

import VImageInput from "vue3-img-input";

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

import { init } from "@emailjs/browser";

import "./style.css";

const pinia = createPinia();
const app = createApp(App);

app.component("v-image-input", VImageInput);
app.component("QuillEditor", QuillEditor);

app.use(router);
app.use(pinia);
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

init(import.meta.env.VITE_EMAIL_JS);

app.mount("#app");
