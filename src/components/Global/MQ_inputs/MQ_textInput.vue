<template>
    <div class="w-full flex gap-2 items-center">
        <i v-if="icon" :class="'text-MQ_light fa-solid fa-' + icon + ' text-xl mb-4'"></i>
        <div class="relative z-0 w-full mb-6 group">
            <Field :name="label" :rules="rules" v-slot="{ field, errorMessage }">
            
                <input :type="password && hide ? 'password' : 'text'" v-bind="field" placeholder=" " class="block py-2.5 px-0 w-full text-sm bg-transparent appearance-none 
                    focus:outline-none focus:ring-0 peer caret-MQ_light -z-10" :maxlength="max ? max : 10000"
                    :class="errorMessage ? 'text-MQ_red' : 'text-slate-300'"/>

                <div class="absolute right-0 top-3 flex justify-center items-center w-6">
                    <i v-if="password" @click="hide = !hide" class="cursor-pointer text-slate-400 fa-solid text-lg hover:text-MQ_lighter | transition-all duration-300" :class="hide ? 'fa-eye-slash' : 'fa-eye'"></i>
                </div>

                <div class="h-[0.25px] w-full rounded-full absolute transition-all duration-300 -mt-0.5" :class="errorMessage ? 'bg-MQ_red' : 'peer-hover:bg-slate-400 bg-slate-500 peer-focus:bg-MQ_light peer-focus:hover:bg-MQ_light'"></div>
                <div class="h-0.5 rounded-full absolute transition-all duration-300 w-0 peer-focus:w-full -mt-0.5" :class="errorMessage ? 'bg-MQ_red' : 'peer-hover:bg-slate-400 bg-slate-500 peer-focus:bg-MQ_light peer-focus:hover:bg-MQ_light'"></div>

                <ErrorMessage class="absolute text-xs text-MQ_red mt-1" :name="label" />
                <div v-if="max" class="absolute w-full text-right text-xs text-MQ_red mt-1 font-bold" :class="errorMessage ? 'text-MQ_red' : 'text-slate-500'"> {{ field.value ? field.value.length : 0 }} / {{ max }} </div>

                <label  class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-50 origin-[0] left-0
                              peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" 
                        :class="errorMessage ? 'peer-focus:text-MQ_red text-MQ_red' : 'peer-focus:text-MQ_light text-slate-500'">
                    {{ label }}
                </label>
        
            </Field>
        </div>
    </div>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';

export default {
    name: "MQ_textInput",
    components: { Field, ErrorMessage },
    data() { return {  hide: true } },
    props: {
        label: String,
        rules: Object,
        icon: String,
        password: Boolean,
        max: Number
    },
}
</script>