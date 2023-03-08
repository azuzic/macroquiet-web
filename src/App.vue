<template>
    <div class="theme-default w-full h-full bg-MQ_darkblue">
        <MQ_navigation/> 
        <router-view/>
    </div>
</template>

<script>
import MQ_navigation from './components/App/MQ_navigation.vue';

export default {
    name: "App",
    components: {
        MQ_navigation,
    }
}
</script>

<style>
@font-face {
  font-family: pdark;
  src: url("src/assets/fonts/pdark.ttf");
}
.p-dark {
  font-family: pdark;
}
html {
    background-color: #0f1119;
}
</style>