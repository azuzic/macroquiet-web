<script setup>
import google from "@/assets/icons/logIn/google.svg"
</script>

<template>
    <a href="https://macroquiet.herokuapp.com/api/auth/google">
        <div @click="GoogleLogIn()" class="flex justify-center items-center bg-white h-10 rounded-sm drop-shadow-md cursor-pointer">
            <img class="h-[18px] aspect-square mr-5 ml-3" :src="google"> 
            <div class="googleFont signInText mr-4">{{ text }} with Google</div>
        </div>
    </a>
</template>

<script>
import { Auth } from "@/services/index_new.js";
export default {
    name: "MQ_GoogleLogInButton",
    props: { text: String },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.googleFont {
    font-family: 'Roboto', sans-serif;
}
.signInText {
    size: 14px;
    color: rgba(0, 0, 0, 0.54);
    font-weight: bold;
}
</style>