import { defineStore } from "pinia";
import Doge from "@/assets/gameCards/dogeGameCard.png";
import StrandedAway from "@/assets/gameCards/strandedAwayGameCard.png";
import WizardsKingdom from "@/assets/gameCards/wizardsKingdomGameCard.png";

import { images } from "@/stores/images.js";

export const useGameStore = defineStore("gameStore", {
    state: () => ({
        games: [
            {
                played: true,
                image: Doge,
                name: "Doge",
                timePlayed: 2,
                lastTimePlayed: "17.02.",
                trophies: [
                    { unlocked: false, name: "Bolt", image: images.Doge.Bolt },
                    { unlocked: true, name: "Home", image: images.Doge.Home },
                    { unlocked: true, name: "OHKO", image: images.Doge.OHKO },
                ],
            },
            {
                played: true,
                image: StrandedAway,
                name: "Stranded Away",
                timePlayed: 37,
                lastTimePlayed: "26.04.",
                trophies: [
                    {
                        unlocked: true,
                        name: "Abyss",
                        image: images.StrandedAway.Abyss,
                    },
                    {
                        unlocked: true,
                        name: "Baby Steps",
                        image: images.StrandedAway.BabySteps,
                    },
                    {
                        unlocked: true,
                        name: "Beginning",
                        image: images.StrandedAway.Beginning,
                    },
                    {
                        unlocked: true,
                        name: "Celestial",
                        image: images.StrandedAway.Celestial,
                    },
                    {
                        unlocked: false,
                        name: "Confusing Escape",
                        image: images.StrandedAway.ConfusingEscape,
                    },
                    {
                        unlocked: true,
                        name: "Dedication",
                        image: images.StrandedAway.Dedication,
                    },
                    {
                        unlocked: false,
                        name: "Downward Spiral",
                        image: images.StrandedAway.DownwardSpiral,
                    },
                    {
                        unlocked: false,
                        name: "Exploration",
                        image: images.StrandedAway.Exploration,
                    },
                    {
                        unlocked: false,
                        name: "Half Way there",
                        image: images.StrandedAway.HalfWayThere,
                    },
                    {
                        unlocked: false,
                        name: "Hasta la Vista",
                        image: images.StrandedAway.HastaLaVista,
                    },
                    {
                        unlocked: false,
                        name: "Higher",
                        image: images.StrandedAway.Higher,
                    },
                    {
                        unlocked: true,
                        name: "King of Jumping",
                        image: images.StrandedAway.KingofJumping,
                    },
                    {
                        unlocked: false,
                        name: "Light",
                        image: images.StrandedAway.Light,
                    },
                    {
                        unlocked: true,
                        name: "Master Clock",
                        image: images.StrandedAway.MasterClock,
                    },
                    {
                        unlocked: false,
                        name: "Monopoly",
                        image: images.StrandedAway.Monopoly,
                    },
                    {
                        unlocked: false,
                        name: "Neverending",
                        image: images.StrandedAway.Neverending,
                    },
                    {
                        unlocked: true,
                        name: "Not Enough Boxes",
                        image: images.StrandedAway.NotEnoughBoxes,
                    },
                    {
                        unlocked: false,
                        name: "Papers, Please",
                        image: images.StrandedAway.PapersPlease,
                    },
                    {
                        unlocked: true,
                        name: "Uno Reverse",
                        image: images.StrandedAway.UnoReverse,
                    },
                ],
            },
        ],
    }),
    actions: {},
});
