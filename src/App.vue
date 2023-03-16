<template>
    <div class="theme-default w-full h-full bg-MQ_darkblue relative content">
        <div class="main fixed w-full h-full main-bg rendering-pixelated z-0">
            <div class="absolute w-full h-full opacity-25 bg-gradient-to-b from-MQ_red via-black to-cyan-700 z-0"></div>
            <div class="absolute w-full h-full opacity-25 bg-MQ_dark"></div>
        </div>
        <div class="min-h-full flex flex-col-reverse">
            <MQ_navigation/> 
            <MQ_footer/>
            <router-view v-slot="{ Component, route }">
                <transition name="fade">
                    <component :is="Component" :key="route.path" />
                </transition>
            </router-view>  
        </div>
    </div>
</template>

<script>
import MQ_footer from './components/App/MQ_footer.vue';
import MQ_navigation from './components/App/MQ_navigation.vue';

export default {
    name: "App",
    components: {
        MQ_navigation,
        MQ_footer
    }
}
</script>

<style>
@font-face {
  font-family: pdark;
  src: url("src/assets/fonts/pdark.ttf");
}
@font-face {
  font-family: logo_font;
  src: url("src/assets/fonts/logo.ttf");
}
.p-dark {
  font-family: pdark;
}
.logo_font {
  font-family: logo_font;
}
.main {
    background-image: url("src/assets/background/night_sky.gif");
    background-size: 480px;
}
.vignette {
	box-shadow: inset 0px 0px 32px rgba(0,0,0,0.75), inset 0px 0px 8px rgba(0,0,0,1);
}
.rendering-auto { image-rendering: auto; }
.rendering-crisp-edges { image-rendering: crisp-edges; }
.rendering-pixelated { image-rendering: pixelated; }

html, body, #app {
  height: 100%;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>