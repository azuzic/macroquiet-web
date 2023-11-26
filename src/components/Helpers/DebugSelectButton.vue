<script setup>
import { globalStore } from "@/main.js";

defineProps({
	name: {
		type: String,
		default: "",
	},
});
</script>
<template>
	<div :class="globalStore.storeSelected == name ? 'text-fipu_blue underline' : 'hover:text-white cursor-pointer'" class="px-4 py-1 font-medium" @click="globalStore.storeSelected = name">
		{{ name }}
	</div>
</template>
