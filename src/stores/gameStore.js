import { defineStore } from "pinia";

import { images } from "@/stores/images.js";

export const useGameStore = defineStore("gameStore", {
    state: () => ({
        gameCards: [
            {
                title: "Doge",
                image: images.GameCard.CARD_DOGE,
                availability: "AVAILABLE NOW!",
                description:`The great and epic Doge game! Our first game ever. Made in just 2 weeks!
                            Take control of a lost Doge trying to find his way out of town. Be careful!
                            You will encounter many dogcatchers along the way.`,
                download: "https://macroquiet.itch.io/doge"
            },
            {
                title: "Stranded Away",
                image: images.GameCard.CARD_STRANDEDAWAY,
                availability: "AVAILABLE NOW!",
                description: `Stranded Away is a 2D pixel-art, single-player game that combines platform-jumping, puzzle-solving, and action elements. 
                                You play as a mysterious space traveller in search of the long-lost inhabitants of planet Athion.`,
                download: "https://macroquiet.itch.io/stranded-away"
            },
        ],
        gamePages: {
            "main-doge": [
                {
                    type:   "text",
                    title:  "DOGE",
                    text:   `Doge game is a small <span class="text-MQ_red"> free-to-play </span> 2.5D
                            platform jumper about a lost <span class="text-MQ_red"> doge </span> who is trying to find his way home.
                            He roams across the streets, crosses roads, jumps over cars, and runs away from nasty dog catchers!
                                <div class="flex flex-wrap lg:flex-nowrap justify-center items-center gap-8">
                                    <img class="rendering-pixelated" src="`+images.GamePage.Doge.GAME_DOGE_dogeArt+`">
                                    <img src="`+images.GamePage.Doge.GAME_DOGE_dogeArt2+`">
                                </div>
                            <p class="mt-3">Play now and help the doge find his way home!</p></br>
                                <a href="https://macroquiet.itch.io/doge" target="_blank" class="text-MQ_green hover:text-MQ_red cursor-pointer font-bold text-lg 
                                underline underline-offset-2 hover:underline-offset-4 hover:tracking-widest transition-all duration-300">
                                <i class="fa-solid fa-download mr-2"></i>Download game</a>`
                },
                {
                    type:   "text",
                    title:  "BACKGROUND",
                    text:   `Doge game is our <span class="text-MQ_red">first game ever</span>, made in just 2 weeks in the summer of <span class="text-MQ_red">2021</span>.
                            Initially, there were 3 of us. <div class="mt-3">
                            We challenged ourselves to learn the Unity game engine and create a simple game, the Doge game being the result of our efforts. </div>
                            <div class="mt-3"> Many thanks to <a href="https://github.com/maurosterpin" class="text-MQ_green hover:underline cursor-pointer">@maurosterpin</a> for his contribution!</div>
                            <img class="rounded-lg mt-4" src="`+images.GamePage.Doge.GAME_DOGE_dogeConcept+`">`
                },
                {
                    type:   "text",
                    title:  "GAMEPLAY",  
                    text:   `The game has <span class="text-MQ_red">3 levels</span>. You control a little dog who is lost and trying to find his way home. <br><br>
                            Jump on cars and buildings to collect <span class="text-MQ_red">bones</span> - they are required to complete the level.
                                <div class="flex justify-center items-center gap-4"><img src="`+images.GamePage.Doge.GAME_DOGE_bone+`"><img class="max-h-36" src="`+images.GamePage.Doge.GAME_DOGE_snack+`"></div>
                            You can also pick up <span class="text-MQ_red">dog food</span> to heal. <span class="text-MQ_red">Dog catchers</span> will start chasing you when you approach them. Dodge their attacks by jumping.
                                <div class="flex justify-center items-center"><img src="`+images.GamePage.Doge.GAME_DOGE_dogeCatcher+`"></div>
                                
                                <p class="mt-3">Doge game contains <span class="text-MQ_red">3 achievements</span> that will be displayed on your profile when you activate them!</p></br>
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
                    text:   `Stranded Away is a 2D <span class="text-MQ_red">pixel-art</span>, single-player game that combines 
                            platform-jumping, puzzle-solving, and action elements. You play as a mysterious space traveller in 
                            search of the long-lost inhabitants of planet <span class="text-MQ_red">Athion</span>.
                            <div class="w-full flex justify-center"><img class="rendering-pixelated" src="`+images.GamePage.StrandedAway.GAME_SA_player_idle+`"></div>`
                },
                {
                    type:   "text",
                    title:  "GAMEPLAY",
                    text:   `You play as a space traveler, exploring the beautiful landscapes of <span class="text-MQ_red">Athion</span>, including its lands, caves, and swamps.
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
                                Search for materials in <span class="text-MQ_red">chests</span> and craft a variety of items to enhance your survival.
                                <div class="w-full flex justify-center my-4">
                                    <img class="rendering-pixelated w-96" src="`+images.GamePage.StrandedAway.GAME_SA_items+`">
                                </div> 
                                Collect <span class="text-MQ_red">coins</span>, as the <span class="text-MQ_red">wandering trader</span> has some pretty neat items that you will definitely like!
                                <div class="w-full flex justify-center my-4">
                                    <img src="`+images.GamePage.StrandedAway.GAME_SA_1_coin+`">
                                    <img src="`+images.GamePage.StrandedAway.GAME_SA_5_coin+`">
                                    <img src="`+images.GamePage.StrandedAway.GAME_SA_10_coin+`">
                                    <img src="`+images.GamePage.StrandedAway.GAME_SA_50_coin+`">
                                </div> 
                                Eliminate <span class="text-MQ_red">lizzards</span> and destroy <span class="text-MQ_red">turrets</span> deep within bunkers, where information about the planet's past inhabitants is hidden.
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
                    text:   `It's the year <span class="text-MQ_red">2352.</span> On the cloudy planet of <span class="text-MQ_red">Athion</span>, our hero lands in search of the human species. 
                            Dark, thick clouds surround his spaceship; no sounds can be heard, save for the branches of a few trees gently fluttering in the breeze. 
                            
                            <p class="mt-3">
                                The land is unsafe! He is unaware that demon-like creatures, <span class="text-MQ_red">lizards</span>, and all kinds of monsters surround him.
                            </p>

                            <p class="mt-3">
                                In search of answers, he discovers some <span class="text-MQ_red">old data</span> written on a disk by the survivors. 
                                They had left the planet many years ago, fleeing from an apocalypse that <span class="text-MQ_red">Dr. Hone</span> instigated.
                            </p>

                            <p class="mt-3">
                                Dr. Hone, a <span class="text-MQ_red">mad scientist</span>, is responsible for bringing <span class="text-MQ_red">chaos</span> to the galaxy. 
                                His madness eventually led him to <span class="text-MQ_red">transform</span> the human species into all sorts of horrifying monsters.
                            </p>`
                },
                {
                    type:   "text",
                    title:  "BACKGROUND",
                    text:   `<p class="text-lg">
                                Stranded Away is our <span class="text-MQ_red">second</span> game ever.     
                                The first version was released on <span class="text-MQ_red">31th of August 2022.</span>, 
                                with development having started in late <span class="text-MQ_red">July of 2021</span>. 
                            </p>
                            <p class="mt-2 text-lg">
                                The game currently consists of three campaign levels and one challenge level called 'Floor is Lava'.
                            </p>
                            <img class="rounded-lg border-MQ_light border-2 my-3" src="`+images.GamePage.StrandedAway.GAME_SA_challenge+`">
                            <p class="text-lg">
                                While developing this game, we learned the fundamentals of game design and pixel art, 
                                as well as how to create various tools and game concepts. 
                                We will certainly utilize all the knowledge gained in our next game!
                            </p>
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
