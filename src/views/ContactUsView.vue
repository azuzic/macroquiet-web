<template>
    <div class="grow flex justify-center items-start pt-16 px-12 absolute overflow-y-auto">
        <div class="flex flex-col | justify-center items-center bg-red | bg-opacity-30 p-2 | w-full">
            
            <MQ_h2 :small="true" class="w-full" text="Contact us!"/>

            <Form @submit="onSubmit" class="w-full max-w-md flex gap-2" :validation-schema="schema">
                <div class="flex flex-col w-full justify-between items-center gap-2">
                    <MQ_textInput label="Name" icon="user"/>
                    <MQ_textInput label="E-mail" icon="envelope"/>
                    <MQ_dropdownInput label="Subject" :list="list" icon="keyboard"/>
                    <MQ_textAreaInput label="Message" :max="2000"/>

                    <div class="w-full h-20 relative flex flex-col justify-center items-center | transition-all duration-500"
                        :class="submitting || type != 'none' ? 'h-16' : 'h-8 delay-500'">
                        <button @click="onSubmit()" class="h-8 w-full group relative z-10 | flex flex-col justify-center overflow-hidden items-center | rounded-md bg-MQ_dark bg-opacity-25 drop-shadow-MQ | transition-all duration-500"
                        :class="submitting || type != 'none' ? 'opacity-0 delay-0' : 'opacity-100 delay-500'">
                            <div class="px-5 h-full | text-MQ_light group-hover:text-MQ_dark | group-hover:font-bold | z-10 | transition-all duration-500 | flex items-center text-sm">SEND</div>
                            <div class="absolute h-full left-0 w-0 group-hover:w-full bg-MQ_light group-hover:bg-MQ_red | transition-all duration-500"></div>
                        </button>
                        <img class="absolute | animate-spin_slow transition-all duration-500" src="src/assets/Logos/macroquiet_logo_icon.png"
                            :class="submitting ? 'h-16 opacity-100 delay-500' : 'h-0 opacity-0 delay-0'">

                        <MQ_alert :show="type == 'warning'" color="rgb(220, 38, 68)" icon="fa-solid fa-triangle-exclamation" class="absolute">
                            <b>Error sending message!</b> <br> This is not your fault, we are probably working on it!
                        </MQ_alert>
                        <MQ_alert :show="type == 'success'" color="rgb(12, 173, 134)" icon="fa-solid fa-circle-check" class="absolute">
                            <b>Your message has been successfully sent!</b> <br> We will contact you very soon!
                        </MQ_alert>
                    </div>
                    
                </div>
            </Form>
            
            <img @click="left = true" class="rendering-pixelated absolute h-36 xs:h-44 sm:h-52 lg:h-64 right-[10%] z-10 cursor-pointer 
                transition-all duration-500  hover:drop-shadow-pixelArt-2 sm:hover:drop-shadow-pixelArt-3 lg:hover:drop-shadow-pixelArt-4 bottom-24" 
                src="src/assets/icons/trader_robot_idle.gif" :class="left ? 'opacity-0' : ''">
            <img @click="left = false" class="rendering-pixelated absolute h-36 xs:h-44 sm:h-52 lg:h-64 left-[10%] -scale-x-100 z-10 cursor-pointer 
                transition-all duration-500 hover:drop-shadow-pixelArt-2 sm:hover:drop-shadow-pixelArt-3 lg:hover:drop-shadow-pixelArt-4 bottom-24" 
                src="src/assets/icons/trader_robot_idle.gif" :class="left ? '' : 'opacity-0'">
            
        </div>
    </div>
</template>

<script>
import MQ_dropdownInput from '../components/Global/MQ_inputs/MQ_dropdownInput.vue';
import MQ_textAreaInput from '../components/Global/MQ_inputs/MQ_textAreaInput.vue';
import MQ_textInput from '../components/Global/MQ_inputs/MQ_textInput.vue';
import MQ_h2 from '@/components/Global/MQ_h2/MQ_h2.vue';
import MQ_alert from '@/components/Global/MQ_alerts/MQ_alert.vue';
import { Form, Field } from 'vee-validate';
import { object, string } from 'yup';
import emailjs from "@emailjs/browser";

let wait = function (seconds) {
    return new Promise((resolveFn) => {
        setTimeout(resolveFn, seconds * 1000);
    });
};

export default {
    name: "ContactUsView",
    components: { MQ_textInput, Form, Field, MQ_h2, MQ_dropdownInput, MQ_textAreaInput, MQ_alert },
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
            left: false,
            submitting: false,
            type: "none"
        }
    },
    methods: {
        async onSubmit(values) {
            if (values) {
                this.submitting = true;
                let queryData = {
                    from_name: values["Name"],
                    from_email: values["E-mail"],
                    message: values["Message"],
                    subject: values["Subject"],
                };
                try {
                    await emailjs.send(
                        "service_iionnfg",
                        "template_1z8rw3r",
                        queryData
                    );
                    await wait(2);
                    this.submitting = false;
                    this.type = "success";
                    await wait(4);
                    this.type = "none";
                } catch (e) {
                    await wait(2);
                    this.submitting = false;
                    this.type = "warning";
                    await wait(4);
                    this.type = "none";
                    console.error("Error sending message!");
                }
            }
        },
    },
}
</script>