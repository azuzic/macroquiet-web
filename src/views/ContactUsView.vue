<template>
    <div class="grow flex justify-center items-start pt-16 px-12 relative overflow-y-auto">
        <div class="flex flex-col | justify-center items-center | bg-opacity-30 p-2 | w-full">
            
            <MQ_h2 class="w-full" text="Contact us!"/>

            <Form @submit="onSubmit" class="w-full max-w-md flex gap-2" :validation-schema="schema">
                <div class="flex flex-col w-full justify-between items-center gap-2">
                    <MQ_textInput label="Name" icon="user"/>
                    <MQ_textInput label="E-mail" icon="envelope"/>
                    <MQ_dropdownInput label="Subject" :list="list" icon="keyboard"/>
                    <MQ_textAreaInput label="Message" :max="2000"/>
                    <button @click="onSubmit()" class="h-8 w-full | group relative overflow-hidden | flex flex-col justify-between items-center | rounded-md bg-MQ_dark bg-opacity-25 drop-shadow-MQ">
                        <div class="px-5 h-full | text-MQ_light group-hover:text-MQ_dark | group-hover:font-bold | z-10 | transition-all duration-500 | flex items-center text-sm">SEND</div>
                        <div class="absolute h-full left-0 w-0 group-hover:w-full bg-MQ_light group-hover:bg-MQ_red | transition-all duration-500"></div>
                    </button>
                </div>
            </Form>

            
            <img @click="left = true" class="rendering-pixelated absolute h-36 xs:h-44 sm:h-52 lg:h-64 right-[10%] z-[100] cursor-pointer 
                transition-all duration-500  hover:drop-shadow-pixelArt-2 sm:hover:drop-shadow-pixelArt-3 lg:hover:drop-shadow-pixelArt-4 bottom-0" 
                src="src/assets/icons/trader_robot_idle.gif" :class="left ? 'opacity-0' : ''">
            <img @click="left = false" class="rendering-pixelated absolute h-36 xs:h-44 sm:h-52 lg:h-64 left-[10%] -scale-x-100 z-[100] cursor-pointer 
                transition-all duration-500 hover:drop-shadow-pixelArt-2 sm:hover:drop-shadow-pixelArt-3 lg:hover:drop-shadow-pixelArt-4 bottom-0" 
                src="src/assets/icons/trader_robot_idle.gif" :class="left ? '' : 'opacity-0'">
            
        </div>
    </div>
</template>

<script>
import MQ_dropdownInput from '../components/Global/MQ_inputs/MQ_dropdownInput.vue';
import MQ_textAreaInput from '../components/Global/MQ_inputs/MQ_textAreaInput.vue';
import MQ_textInput from '../components/Global/MQ_inputs/MQ_textInput.vue';
import MQ_h2 from '../components/Global/MQ_h2/MQ_h2.vue';
import { Form, Field } from 'vee-validate';
import { object, string } from 'yup';

export default {
    name: "ContactUsView",
    components: { MQ_textInput, Form, Field, MQ_h2, MQ_dropdownInput, MQ_textAreaInput },
    setup() {
        const schema = object({
            "Name": string().required().label("Name"),
            "Message": string().required().label("Message"),
            "E-mail": string().required().email().label("Email"),
        });
        return {
            schema,
        };
    },
    data() {
        return {
            list: ["Registration problem", "Achievements problem", "Bug report", "Suggestion", "Cooperation", "Other"],
            left: false
        }
    },
    methods: {
        onSubmit(values) {
            console.log(values);
        },
    },
}
</script>