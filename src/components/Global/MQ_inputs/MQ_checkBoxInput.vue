<template>
    <div class="w-full flex items-center gap-2 relative z-10 drop-shadow-MQ">
        <i @click="handleChange(value)" 
            class="text-2xl text-MQ_light text-opacity-75 hover:text-MQ_lighter | transition-all duration-300 | cursor-pointer"
            :class="checked ? 'fa-solid fa-square-check' : 'fa-regular fa-square'"></i>
        <div class="text-MQ_light text-opacity-75 text-sm">  
            {{ label }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
    modelValue: {
        type: null,
    },
    label: String,
    value: {
        type: String,
    },
});

const { label } = toRefs(props);
const { checked, handleChange } = useField(label, undefined, {
    type: 'checkbox',
    checkedValue: props.value,
});
</script>

<style scoped>
button {
    background: none;
    border: none;
    font-size: 22px;
}
</style>
