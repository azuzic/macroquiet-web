<script setup>
import { useCarouselStore } from "@/stores/carouselStore";
import { useTimelineStore } from "@/stores/timelineStore";
import { useGlobalStore } from "@/stores/globalStore";

const carouselStore = useCarouselStore();
const globalStore = useGlobalStore();
const timelineStore = useTimelineStore();

carouselStore.setup();
timelineStore.setup();
globalStore.setup();
</script>

<template>
	<!--GlobalStoreDebug /-->
	<div class="w-full h-full relative | transition-all duration-300" :class="globalStore.style[0]">
		<MQ_bg />
		<div class="min-h-full flex flex-col-reverse absolute w-full">
			<MQ_navigation />
			<router-view class="" v-slot="{ Component, route }">
				<transition name="fade">
					<component class="absolute w-full h-full" :is="Component" :key="route.path" />
				</transition>
			</router-view>
		</div>
	</div>
</template>

<script>
import GlobalStoreDebug from "@/components/Helpers/GlobalStoreDebug.vue";
import MQ_navigation from "@/components/App/MQ_navigation.vue";
import MQ_bg from "@/components/App/MQ_bg.vue";

export default {
	name: "App",
	components: { MQ_navigation, MQ_bg, GlobalStoreDebug },
};
</script>

<style lang="scss">
.SA_cursor {
	cursor: url(@/assets/games/page/StrandedAway/mouse_aim.png) 15 15, auto;
	animation: cursor 400ms infinite;
	@keyframes cursor {
		0% {
			cursor: url(@/assets/games/page/StrandedAway/mouse_aim2.png) 15 15, auto;
		}
		20% {
			cursor: url(@/assets/games/page/StrandedAway/mouse_aim2.png) 15 15, auto;
		}
		40% {
			cursor: url(@/assets/games/page/StrandedAway/mouse_aim2.png) 15 15, auto;
		}
		60% {
			cursor: url(@/assets/games/page/StrandedAway/mouse_aim.png) 15 15, auto;
		}
		80% {
			cursor: url(@/assets/games/page/StrandedAway/mouse_aim.png) 15 15, auto;
		}
		100% {
			cursor: url(@/assets/games/page/StrandedAway/mouse_aim.png) 15 15, auto;
		}
	}
	.cursor-pointer {
		cursor: url(@/assets/games/page/StrandedAway/mouse_point.png) auto;
		animation: pointer 400ms infinite;
		@keyframes pointer {
			0% {
				cursor: url(@/assets/games/page/StrandedAway/mouse_point2.png), auto;
			}
			20% {
				cursor: url(@/assets/games/page/StrandedAway/mouse_point2.png), auto;
			}
			40% {
				cursor: url(@/assets/games/page/StrandedAway/mouse_point2.png), auto;
			}
			60% {
				cursor: url(@/assets/games/page/StrandedAway/mouse_point.png), auto;
			}
			80% {
				cursor: url(@/assets/games/page/StrandedAway/mouse_point.png), auto;
			}
			100% {
				cursor: url(@/assets/games/page/StrandedAway/mouse_point.png), auto;
			}
		}
	}
}
</style>
