import { defineStore } from "pinia";

import { images } from "@/stores/images.js";

export const useGameStore = defineStore("gameStore", {
    state: () => ({
        gameCards: [
            {
                title: "Doge",
                image: images.GameCard.CARD_DOGE,
                availability: "AVAILABLE NOW!",
                description:
                    "The great and epic Doge game! Our first game ever. Made in just 2 weeks! " +
                    "Take control of lost doge trying to find his way out of town. " +
                    "Be careful! You will encounter many dogcatchers along the way. ",
                download: "https://macroquiet.itch.io/doge"
            },
            {
                title: "Stranded Away",
                image: images.GameCard.CARD_STRANDEDAWAY,
                availability: "AVAILABLE NOW!",
                description:
                    "Stranded Away is a 2D pixel art singleplayer: platform-jumper, puzzle and action game. " +
                    "You are playing as a mysterious space traveller who`s looking for long gone inhabitants of planet Athion. ",
                download: "https://macroquiet.itch.io/stranded-away"
            },
        ],
        gamePages: {
            "main-doge": [
                {
                    type:   "text",
                    title:  "DOGE",
                    text:   `Doge game is a small <span class="text-MQ_red"> free-to-play </span> 2.5D
                            platform jumper about a lost <span class="text-MQ_red"> doge </span> who tries to find his way home.
                            He is roaming across the streets, crossing roads, jumping cars and running away from nasty dog catchers!
                                <div class="flex flex-wrap lg:flex-nowrap justify-center items-center gap-8">
                                    <img class="rendering-pixelated" src="`+images.GamePage.Doge.GAME_DOGE_dogeArt+`">
                                    <img src="`+images.GamePage.Doge.GAME_DOGE_dogeArt2+`">
                                </div>
                            <p class="mt-3">Play now and help doge find his way home!</p></br>
                                <a href="https://macroquiet.itch.io/doge" target="_blank" class="text-MQ_green hover:text-MQ_red cursor-pointer font-bold text-lg 
                                underline underline-offset-2 hover:underline-offset-4 hover:tracking-widest transition-all duration-300">
                                <i class="fa-solid fa-download mr-2"></i>Download game</a>`
                },
                {
                    type:   "text",
                    title:  "BACKGROUND",
                    text:   `Doge game is our <span class="text-MQ_red">first game ever</span>, made in just 2 weeks in the summer of <span class="text-MQ_red">2021</span>.
                            Initially 3 of us, we challenged ourselves to learn Unity game engine and create a simple game,
                            Doge game being the result of our efforts. <br/>
                            <div class="mt-3"> Many thanks to <a href="https://github.com/maurosterpin" class="text-MQ_green hover:underline cursor-pointer">@maurosterpin</a> for his contribution!</div>
                            <img class="rounded-lg mt-4" src="`+images.GamePage.Doge.GAME_DOGE_dogeConcept+`">`
                },
                {
                    type:   "text",
                    title:  "GAMEPLAY",  
                    text:   `The game has <span class="text-MQ_red">3 levels</span>. You control a little dog. He is lost and trying to find his way home. <br><br>
                            Jump on the cars and buildings to collect <span class="text-MQ_red">bones</span> - they are required to complete the level.
                                <div class="flex justify-center items-center gap-4"><img src="`+images.GamePage.Doge.GAME_DOGE_bone+`"><img class="max-h-36" src="`+images.GamePage.Doge.GAME_DOGE_snack+`"></div>
                            You can also pick up the <span class="text-MQ_red">dog food</span> to heal. <span class="text-MQ_red">Dog catchers</span> will start chasing you when you approach them. Dodge their attacks by jumping.
                                <div class="flex justify-center items-center"><img src="`+images.GamePage.Doge.GAME_DOGE_dogeCatcher+`"></div>
                                
                                <p class="mt-3">Doge game contains <span class="text-MQ_red">3 achievements</span> which will be displayed on your profile when you activate them!</p></br>
                                <a href="https://macroquiet.itch.io/doge" target="_blank" class="text-MQ_green hover:text-MQ_red cursor-pointer font-bold text-lg 
                                underline underline-offset-2 hover:underline-offset-4 hover:tracking-widest transition-all duration-300">
                                <i class="fa-solid fa-download mr-2"></i>Download game</a>`
                },
                {
                    type:   "videoList",
                    title:  "ORIGINAL SOUNDTRACK",
                    videos: ["https://www.youtube.com/embed/kkkRJm4rJuI", "https://www.youtube.com/embed/G5wPHVsgpjk", "https://www.youtube.com/embed/u3PrdOA_4Tw" ],
                }
            ],   
            "main-stranded": [
                {
                    type:   "text",
                    title:  `STRANDED AWAY`,
                    text:   `Stranded Away is a 2D <span class="text-MQ_red">pixel-art</span> singleplayer: platform-jumper, puzzle and action game.
                            You are playing as a mysterious space traveller who's looking for long gone inhabitants of planet <span class="text-MQ_red">Athion</span>.
                            <div class="w-full flex justify-center"><img class="rendering-pixelated" src="`+images.GamePage.StrandedAway.GAME_SA_player_idle+`"></div>`
                },
                {
                    type:   "text",
                    title:  "GAMEPLAY",
                    text:   `You are playing as a space traveler, explore beautiful <span class="text-MQ_red">Athion</span> land, cave and swamp.
                                <div class="flex w-full justify-center">
                                    <div class="w-full justify-center items-center my-4 h-96 max-w-2xl border-MQ_light border-2 rounded-lg overflow-hidden relative">

                                        <div class="group/item w-full h-0 absolute flex imgg">
                                            <div class="bg-cover bg-left group-hover/item:border-r-2 border-MQ_light group-hover/item:w-full w-1/3 h-96 transition-all duration-500" 
                                                style="background-image: url(`+images.GamePage.StrandedAway.GAME_SA_land+`)"></div>

                                            <div class="bg-cover bg-center group-hover/item:w-0 group-hover/item:border-0 w-1/3 h-0 transition-all duration-500" 
                                                style="background-image: url(`+images.GamePage.StrandedAway.GAME_SA_cave+`)"></div>

                                            <div class="bg-cover bg-right group-hover/item:w-0 w-1/3 h-0 transition-all duration-500" 
                                                style="background-image: url(`+images.GamePage.StrandedAway.GAME_SA_swamp+`)"></div>
                                        </div>
                                        <div class="group/apple w-full h-0 absolute flex transition-all duration-500 peer peer-hover:w-0 right-0">
                                            <div class="bg-cover bg-left group-hover/apple:w-0 w-1/3 h-0 transition-all duration-500 pointer-events-none" 
                                                style="background-image: url(`+images.GamePage.StrandedAway.GAME_SA_land+`)"></div>

                                            <div class="bg-cover bg-center border-x-2 border-MQ_light group-hover/apple:w-full w-1/3 h-96 transition-all duration-500" 
                                                style="background-image: url(`+images.GamePage.StrandedAway.GAME_SA_cave+`)"></div>

                                            <div class="bg-cover bg-right group-hover/apple:w-0 w-1/3 h-0 transition-all duration-500 pointer-events-none" 
                                                style="background-image: url(`+images.GamePage.StrandedAway.GAME_SA_swamp+`)"></div>
                                        </div>
                                        <div class="group/banana w-full h-0 absolute flex transition-all duration-500 peer-hover:w-0 right-0">
                                            <div class="bg-cover bg-left group-hover/banana:w-0 w-1/3 h-0 transition-all duration-500 pointer-events-none" 
                                                style="background-image: url(`+images.GamePage.StrandedAway.GAME_SA_land+`)"></div>

                                            <div class="bg-cover bg-center group-hover/banana:w-0 group-hover/banana:border-0 w-1/3 h-0 transition-all duration-500 pointer-events-none" 
                                                style="background-image: url(`+images.GamePage.StrandedAway.GAME_SA_cave+`)"></div>

                                            <div class="bg-cover bg-right group-hover/banana:border-l-2 border-MQ_light group-hover/banana:w-full w-1/3 h-96 transition-all duration-500" 
                                                style="background-image: url(`+images.GamePage.StrandedAway.GAME_SA_swamp+`)"></div>
                                        </div>               
                                    </div> 
                                </div>
                            Search for materials in <span class="text-MQ_red">chests</span> and craft yourself various items in order to survive. 
                                <div class="w-full flex justify-center my-4">
                                    <img class="rendering-pixelated w-96" src="`+images.GamePage.StrandedAway.GAME_SA_items+`">
                                </div> 
                            Collect <span class="text-MQ_red">coins</span>, <span class="text-MQ_red">wandering trader</span> has some pretty neat items you will most definitely like! 
                                <div class="w-full flex justify-center my-4">
                                    <img src="`+images.GamePage.StrandedAway.GAME_SA_1_coin+`">
                                    <img src="`+images.GamePage.StrandedAway.GAME_SA_5_coin+`">
                                    <img src="`+images.GamePage.StrandedAway.GAME_SA_10_coin+`">
                                    <img src="`+images.GamePage.StrandedAway.GAME_SA_50_coin+`">
                                </div> 
                            Kill <span class="text-MQ_red">lizzards</span> and destroy <span class="text-MQ_red">turrents</span> deep down in bunkers where they hide all the information about planet's past inhabitants. 
                                <div class="w-full flex justify-center items-end my-4">
                                    <img class="rendering-pixelated w-32 h-32" src="`+images.GamePage.StrandedAway.GAME_SA_Lizard+`">
                                    <img class="rendering-pixelated w-32 h-32" src="`+images.GamePage.StrandedAway.GAME_SA_Spitter+`">
                                    <img class="rendering-pixelated w-32 h-16" src="`+images.GamePage.StrandedAway.GAME_SA_Turret+`">
                                </div> 
                            You will have to solve complex <span class="text-MQ_red">puzzles</span> in order to progress through the land of </span>Athion</span>!
                            <p class="mt-3">Play now and unlock many different <span class="text-MQ_red">achievements</span> which will be displayed on your profile!</p></br> 
                                <a href="https://macroquiet.itch.io/stranded-away" target="_blank" class="text-MQ_green hover:text-MQ_red cursor-pointer font-bold text-lg 
                                underline underline-offset-2 hover:underline-offset-4 hover:tracking-widest transition-all duration-300">
                                <i class="fa-solid fa-download mr-2"></i>Download game</a>`
                },
                {
                    type:   "text",
                    title:  "STORY",
                    text:   `It's year <span class="text-MQ_red">2352.</span>, on the cloudy planet of <span class="text-MQ_red">Athion</span>, 
                            our hero lands in search of human species. Dark, thick clouds surround his space ship, no sounds to be heard, 
                            but the branches of few trees gently fluttering in the breeze.

                            <p class="mt-3">The land is unsafe! There are demon like creatures, <span class="text-MQ_red">lizzards</span> and all 
                            kinds of monsters surrounding him, he just isn't yet aware of it.</p>

                            <p class="mt-3">In search of answers, he finds some <span class="text-MQ_red">old data</span> written on disk by those who survived.
                            They had left the planet many years ago running away from apocalypse that <span class="text-MQ_red">Dr. Hone</span> created.</p>

                            <p class="mt-3">He is a <span class="text-MQ_red">mad scientist</span> responsible for bringing <span class="text-MQ_red">chaos</span> 
                            to the galaxy. His madness eventually lead him to <span class="text-MQ_red">transforming</span> human species into all kinds 
                            of disgusting monsters.</p>`
                },
                {
                    type:   "text",
                    title:  "BACKGROUND",
                    text:   `Standed Away is our <span class="text-MQ_red">second</span> ever game. 
                            First version being released on <span class="text-MQ_red">31th of August 2022.</span>, 
                            the development started in late <span class="text-MQ_red">July of 2021</span>.  
                            <p class="mt-2">Game currently consists of 3 campaign levels + 1 challenge level - 'Floor is lava'.</p>
                            <img class="rounded-lg border-MQ_light border-2 my-3" src="`+images.GamePage.StrandedAway.GAME_SA_challenge+`">
                            Developing this game, we learned the fundamentals of game design, pixel art, we learned how to make various tools and game concepts. 
                            We sure will utilize all gained knowledge on our next game!
                            <img class="rounded-lg rendering-pixelated border-MQ_light border-2 my-3 scale-100" src="`+images.GamePage.StrandedAway.GAME_SA_scene+`">`
                },
                {
                    type:   "videoList",
                    title:  "VIDEOS",
                    videos: ["https://www.youtube.com/embed/FB92RX_obXA", "https://www.youtube.com/embed/Sv2S65kP6hk" ],
                },
            ]
        }
    }),
    actions: {},
});
