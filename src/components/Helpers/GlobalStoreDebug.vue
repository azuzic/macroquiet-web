<script setup>
import { computed } from "vue";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
import Slider from "@vueform/slider";
import DebugSelectButton from "@/components/Helpers/DebugSelectButton.vue";

import { carouselStore, gameStore, globalStore, timelineStore } from "@/main.js";

const storeNames = ["carouselStore", "gameStore", "globalStore", "timelineStore"];

const newValueFormatted = computed(() => {
	switch (globalStore.storeSelected) {
		case "carouselStore":
			return carouselStore.$state;
		case "gameStore":
			return gameStore.$state;
		case "globalStore":
			return globalStore.$state;
		case "timelineStore":
			return timelineStore.$state;
	}
});
</script>

<template>
	<div v-if="globalStore.debug" class="w-screen h-screen flex justify-center items-center fixed backdrop-blur-sm z-[1000] py-16 px-[8%]">
		<div class="p-4 flex flex-col bg-black bg-opacity-90 shadow-xl rounded-xl h-full w-full text-slate-400">
			<div class="text-center text-2xl font-bold">DEBUG INFO</div>
			<Slider class="my-4 slider min-h-[8px] h-[8px] w-64 self-center" v-model="globalStore.depth" :min="1" :max="8" showTooltip="focus" :merge="1" :lazy="false" />
			<div class="w-full flex justify-start items-center py-1 overflow-y-hidden overflow-x-auto pb-4 min-h-[24px] max-h-[24px]">
				<DebugSelectButton v-for="name in storeNames" :name="name" />
			</div>
			<hr />
			<div class="overflow-auto">
				<vue-json-pretty showIcon :deep="globalStore.depth" :data="newValueFormatted" />
			</div>
		</div>
	</div>
	<div class="fixed bottom-2 right-2 z-[2000]" @click="globalStore.debug = !globalStore.debug">
		<i class="fa-solid fa-circle-question text-main_lighttext hover:text-main_cyan text-4xl hover:cursor-pointer mr-2 opacity-50"></i>
	</div>
</template>

<style src="@vueform/slider/themes/default.css"></style>
<style>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
	transition: all 0s 50000s;
}
.vjs-tree-node:hover {
	background: rgba(255, 255, 255, 0.1) !important;
}
.slider {
	--slider-bg: #f1f5f9;
	--slider-connect-bg: #14b35b;
	--slider-tooltip-bg: #14b35b;
}
</style>
