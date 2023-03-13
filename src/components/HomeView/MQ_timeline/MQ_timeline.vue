<template>
    <div class="relative">
        <MQ_h2 text="WHAT'S BEEN GOING ON"/>

        <div class="snap-x snap-proximity flex w-0 min-w-full grow h-[760px] items-center pl-16 pr-48 overflow-x-scroll">
            <MQ_timelineCard v-for="t, id in timeline" :t="t" :id="id" :l="timeline.length"> {{ t.text }} </MQ_timelineCard>
        </div>

    </div>
</template>

<script>
import MQ_h2 from "../../Global/MQ_h2.vue";
import MQ_timelineCard from "./MQ_timelineCard.vue";

export default {
    name: "MQ_timeline",
    components: { MQ_h2, MQ_timelineCard },
    data() {
        return {
            timeline: [
                {
                    date: "9 November, 2022",
                    title: "STRANDED AWAY | OFFICIAL TRAILER",
                    text: `Stranded Away official gameplay trailer has been just released! <iframe class="w-full pt-2 aspect-video" src="https://www.youtube.com/embed/FB92RX_obXA" title="Stranded Away | Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                    author: "MacroQuiet",
                    icon: "fa-brands fa-youtube"
                },
                {
                    date: "7 November, 2022",
                    title: "STRANDED AWAY 1.1C AVAILABLE NOW!",
                    text: `Hello everyone! <br> We are happy to announce the new BIG update of Stranded Away - v1.1c <br> <br> <a href="https://macroquiet.itch.io/stranded-away" style="color: #e84a4b" target="_blank">Download now</a> and stay tuned for future updates! <br><br> Enjoy playing 😀`,
                    author: "MacroQuiet",
                    icon: "fa-solid fa-gamepad"
                },
                {
                    date: "15 October, 2022",
                    title: "BUY US A COFFEE",
                    text: `We currently don't make any money off our games as they are all free to play and ad-free. If you would like to support us, and our future work, feel free to donate any amount through our <a href="https://www.buymeacoffee.com/macroquiet" target="_blank" style="color:#e84a4b">BuyMeACoffee</a> page. <br><br>We would really appreciate it! :)`,
                    author: "MacroQuiet",
                    icon: "fa-solid fa-mug-hot"
                },
                {
                    date: "31 August, 2022",
                    title: "STRANDED AWAY - AVAILABLE NOW!",
                    text: `After a year of hard work, first version of Stranded Away - a 2D pixel art platformer & shooter game has finally been released! <br> <br> <a href="https://macroquiet.itch.io/stranded-away" style="color: #e84a4b" target="_blank">Download now</a> and stay tuned for future updates! :D`,
                    author: "MacroQuiet",
                    icon: "fa-solid fa-download"
                },
                {
                    date: "9 November, 2022",
                    title: "NEW MACROQUIET INTRO",
                    text: `Check out our new video intro on Youtube!<br><br><iframe class="w-full aspect-video" src="https://www.youtube.com/embed/qUBenrhpwek" title="MacroQuiet Intro 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                    author: "MacroQuiet",
                    icon: "fa-brands fa-youtube"
                },
                {
                    date: "28 May, 2022",
                    title: "STRANDED AWAY COMING SOON!",
                    text: `2D platformer/shooter game about exploring abandoned planet Athion. You are playing as a hero whose job is to save the galaxy from evil scientist dr. Hone. Game is currently still in progress!`,
                    author: "MacroQuiet",
                    icon: "fa-solid fa-bell"
                },
                {
                    date: "21 July, 2021",
                    title: "DOGE AVILABLE NOW!",
                    text: `The great Doge game! Our first game ever. Created with goal to learn the game engine. Take control of the lost doge trying to find his way out of town. Be careful! You will encounter many dogcatchers along the way. Also, those bones look really delicious...<br><br><a href="https://macroquiet.itch.io/doge" style="color: #e84a4b" target="_blank">Download now</a> and stay tuned for future updates!`,
                    author: "MacroQuiet",
                    icon: "fa-solid fa-download"
                },
                {
                    date: "3 July, 2021",
                    title: "MACROQUIET IS BORN!",
                    text: "Bring in the champagne!",
                    author: "MacroQuiet",
                    icon: "fa-solid fa-champagne-glasses"
                },
            ]
        }
    }
}
</script>

<style>
</style>