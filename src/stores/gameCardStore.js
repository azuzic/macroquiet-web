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
            {
                image: "src/assets/gameCards/wizardsKingdomGameCard.png",
                title: "Wizards Kingdom",
                availability: "IN  DEVELOPMENT ...",
                description: "New upcoming RTS game",
            },
        ],
    }),
    actions: {},
});
