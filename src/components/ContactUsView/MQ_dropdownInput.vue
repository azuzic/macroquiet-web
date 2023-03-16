<template>
    <div class="relative z-20 w-full mb-6 group">
        <Field type="text" :name="label" :rules="rules" v-slot="{ field, errorMessage }" v-model="value">

            <input v-bind="field" @focusout="!focus ? show = false : ''" @click="show = true" :placeholder="value" readonly
                class="block py-2.5 px-0 w-full text-sm bg-transparent appearance-none focus:outline-none focus:ring-0 peer caret-transparent" 
                :class="errorMessage ? 'text-MQ_red' : 'text-slate-300'"/>

            <div class="h-[0.25px] w-full rounded-full absolute transition-all duration-300 -mt-0.5" :class="errorMessage ? 'bg-MQ_red' : 'peer-hover:bg-slate-400 bg-slate-500 peer-focus:bg-MQ_light peer-focus:hover:bg-MQ_light'"></div>
            <div class="h-0.5 rounded-full absolute transition-all duration-300 w-0 peer-focus:w-full -mt-0.5" :class="errorMessage ? 'bg-MQ_red' : 'peer-hover:bg-slate-400 bg-slate-500 peer-focus:bg-MQ_light peer-focus:hover:bg-MQ_light'"></div>

            <svg class="w-4 h-4 absolute top-4 right-0 text-slate-500 peer-focus:text-MQ_light transition-all duration-300 cursor-pointer -z-10" :class="show ? '-scale-100' : ''" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>

            <ErrorMessage class="absolute text-xs text-MQ_red mt-1" :name="label" />

            <label v-if="value == '' && !focus" class="peer-focus:font-medium absolute text-sm transition-all duration-300 transform -translate-y-0 scale-100 top-3 -z-10 origin-[0] left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" 
                :class="errorMessage ? 'peer-focus:text-MQ_red text-MQ_red' : 'peer-focus:text-MQ_light text-slate-500'">
                {{ label }} 
            </label>
            <label v-else class="peer-focus:font-medium absolute text-slate-500 peer-focus:text-MQ_light text-sm transform top-3 transition-all duration-300 -z-10 origin-[0] left-0 placeholder-shown:scale-100 placeholder-shown:translate-y-0 scale-75 -translate-y-6">
                {{ label }} 
            </label>

            <div @mouseleave="focus = false" @mouseenter="focus = true" :class="show ? 'h-fit max-h-64 opacity-100' : 'h-0 opacity-0'"
                class="w-full mt-4 | bg-MQ_dark bg-opacity-90 | drop-shadow-md rounded-lg | overflow-hidden | transition-opacity duration-300 | absolute overflow-y-auto">
                <ul class="text-sm z-50" aria-labelledby="dropdownDefaultButton">
                    <div v-for="v, id in list" @click="value = v; show = false;" 
                        class="block px-4 py-2 hover:bg-MQ_light cursor-pointer hover:text-MQ_dark hover:font-bold z-50"
                        :class="v == value ? 'bg-MQ_red text-MQ_dark font-bold' : 'text-MQ_light'"> 
                        {{ v }} 
                    </div>   
                </ul>
            </div>

        </Field>
    </div>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';

export default {
    name: "MQ_dropdownInput",
    components: { Field, ErrorMessage },
    props: {
        label: String,
        list: Array,
        rules: Object,
    },
    data() {
        return {
            value: "",
            show: false,
            focus: false
        }
    }
}
</script>