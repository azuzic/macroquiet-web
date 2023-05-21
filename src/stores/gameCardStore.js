import { defineStore } from "pinia";

export const useGameCardStore = defineStore("gameCardStore", {
    state: () => ({
        gameCards: [
            {
                image: "src/assets/gameCards/dogeGameCard.png",
                title: "Doge",
                availability: "AVAILABLE NOW!",
                description:
                    "The great and epic Doge game! Our first game ever. Made in just 2 weeks! " +
                    "Take control of lost doge trying to find his way out of town. " +
                    "Be careful! You will encounter many dogcatchers along the way. ",
            },
            {
                image: "src/assets/gameCards/strandedAwayGameCard.png",
                title: "Stranded Away",
                availability: "AVAILABLE NOW!",
                description:
                    "Stranded Away is a 2D pixel art singleplayer: platform-jumper, puzzle and action game. " +
                    "You are playing as a mysterious space traveller who's looking for long gone inhabitants of planet Athion. ",
            },
        ],
        gamePages: {
            "main-doge": {
                name: "DOGE",
                about:  'Doge game is a small <span class="text-MQ_red"> free-to-play </span> 2.5D '+
                        'platform jumper about a lost <span class="text-MQ_red"> doge </span> who tries to find his way home. ' +
                        'He is roaming across the streets, crossing roads, jumping cars and running away from nasty dog catchers! ' +
                        'Play now and help doge find his way home! <div class="flex flex-wrap lg:flex-nowrap justify-center items-center gap-8">'+
                        '<img class="rendering-pixelated" src="src/assets/gameCards/page/dogeArt.png">'+
                        '<img src="src/assets/gameCards/page/dogeArt2.png"></div>',
                background: 
                        'Doge game is our <span class="text-MQ_red">first game ever</span>, made in just 2 weeks in the summer of <span class="text-MQ_red">2021</span>. ' +
                        'Initially 3 of us, we challenged ourselves to learn Unity game engine and create a simple game, ' +
                        'Doge game being the result of our efforts. ' +
                        'Many thanks to <a href="https://github.com/maurosterpin" class="text-MQ_red hover:underline cursor-pointer">@maurosterpin</a> for his contribution!'+
                        '<img class="rounded-lg mt-4" src="src/assets/gameCards/page/dogeConcept.jpg">',

                gameplay:   'The game has <span class="text-MQ_red">3 levels</span>. You control a little dog. He is lost and trying to find his way home. <br><br>' +
                            'Jump on the cars and buildings to collect <span class="text-MQ_red">bones</span> - they are required to complete the level.' +
                            '<div class="flex justify-center items-center gap-4"><img src="src/assets/gameCards/page/bone.png"><img class="max-h-36" src="src/assets/gameCards/page/snack.png"></div>'+
                            'You can also pick up the <span class="text-MQ_red">dog food</span> to heal. <span class="text-MQ_red">Dog catchers</span> will start chasing you when you approach them. Dodge their attacks by jumping.' +
                            '<div class="flex justify-center items-center"><img src="src/assets/gameCards/page/dogeCatcher.png"></div>'+
                            'Doge game contains <span class="text-MQ_red">3 achievements</span> which will displayed on your profile when you activate them!',                
                ostTitle: "ORIGINAL SOUNDTRACK",
                ost: ["https://www.youtube.com/embed/kkkRJm4rJuI", "https://www.youtube.com/embed/G5wPHVsgpjk", "https://www.youtube.com/embed/u3PrdOA_4Tw" ],
                download: "https://macroquiet.itch.io/doge"
            },
            "main-stranded": {
                name: '<span class="whitespace-nowrap">STRANDED AWAY</span>',
                about: "Doge game is a small free-to-play 2.5D platform jumper about a lost doge who tries to find his way home. He is roaming across the streets, crossing roads, jumping cars and running away from nasty dog catchers! Play now and help doge find his way home!",
                background: "Doge game is our first game ever, made in just 2 weeks in the summer of 2021. Initially 3 of us, we challenged ourselves to learn Unity game engine and create a simple game, Doge game being the result of our efforts. Many thanks to @maurosterpin for his contribution!",
                gameplay: "The game has 3 levels. You control a little dog. He is lost and trying to find his way home. Jump on the cars and buildings to collect bones - they are required to complete the level. You can also pick up the dog food to heal. Dog catchers will start chasing you when you approach them. Dodge their attacks by jumping. Doge game contains 3 achievements which will displayed on your profile when you activate them!",                
                ostTitle: "VIDEOS",
                ost: ["https://www.youtube.com/embed/FB92RX_obXA", "https://www.youtube.com/embed/Sv2S65kP6hk" ],
                download: "https://macroquiet.itch.io/doge"
            }
        }
    }),
    actions: {},
});
