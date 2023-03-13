<template>
    <div class="theme-default w-full h-full bg-MQ_darkblue relative">
        <div class="main fixed w-full h-full main-bg rendering-pixelated z-0">
            <div class="absolute w-full h-full opacity-25 bg-gradient-to-b from-MQ_red via-black to-cyan-700 z-0"></div>
            <div class="absolute w-full h-full opacity-25 bg-MQ_dark"></div>
        </div>
        <MQ_navigation/> 
        <router-view/>
        <MQ_footer/>
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
</style>