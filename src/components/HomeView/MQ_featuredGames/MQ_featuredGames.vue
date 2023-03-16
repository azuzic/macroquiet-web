<template>
    <div id="games" class="pb-8 relative">

        <MQ_h2 text="FEATURED GAMES"/>

        <div class="snap-x snap-mandatory flex w-0 min-w-full grow lg:flex-wrap | md:justify-center | overflow-x-auto text-MQ_light | px-16 lg:px-4 py-4 -mt-4 | gap-3 lg:gap-6 2xl:gap-8 | transition-all duration-300">
            <MQ_gameCard v-for="g, id in gameCards" :image="g.image" :title="g.title" :availability="g.availability" :description="g.description" 
            :class="id==0 ? 'snap-start' : id-1==gameCards.length ? 'snap-end' : 'snap-center'"/>
        </div>

    </div>
</template>
<script>
import MQ_gameCard from "./MQ_gameCard.vue"
import MQ_h2 from "../../Global/MQ_h2.vue";
export default {
    name: "MQ_featuredGames",
    components: {
        MQ_gameCard,
        MQ_h2
    },
    data() {
        return {
            gameCards: [
                {
                    image:"src/assets/gameCards/dogeGameCard.png",
                    title:"Doge",
                    availability:"AVAILABLE NOW!",
                    description:"The great and epic Doge game! Our first game ever. Made in just 2 weeks! "+
                    "Take control of lost doge trying to find his way out of town. "+
                    "Be careful! You will encounter many dogcatchers along the way. "
                },
                {
                    image: "src/assets/gameCards/strandedAwayGameCard.png",
                    title: "Stranded Away",
                    availability: "AVAILABLE NOW!",
                    description: "Stranded Away is a 2D pixel art singleplayer: platform-jumper, puzzle and action game. "+
                    "You are playing as a mysterious space traveller who's looking for long gone inhabitants of planet Athion. "
                },
                {
                    image: "src/assets/gameCards/wizardsKingdomGameCard.png",
                    title: "Wizards Kingdom",
                    availability: "IN  DEVELOPMENT ...",
                    description: "New upcoming RTS game"
                },
            ]
        }
    }
}
</script>