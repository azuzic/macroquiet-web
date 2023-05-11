// Vue.js component (NewPassword.vue)
<template>
    <div class="grow flex flex-col justify-between items-start pt-16 absolute overflow-y-auto">
        <div class="flex grow pb-96 flex-col | justify-center items-center bg-red | bg-opacity-30 p-2 | w-full">

            <MQ_h2 class="w-full" text="Reset your password" :small="true"/>

            <Form @submit="onSubmit" class="w-full max-w-md flex justify-between px-12 sm:px-6 | transition-all duration-500" :validation-schema="schema">
                <div class="flex flex-col w-full justify-between items-center gap-2">

                    <MQ_textInput :password="true" label="Password" icon="key" />
                    <MQ_textInput :password="true" label="Password confirm" icon="key" />

                    <div class="w-full relative flex flex-col justify-center mt-2 items-center transition-all duration-500"
                        :class="submitting || type != 'none' ? 'h-16' : 'h-8 delay-500'">
                        <button @click="onSubmit()"
                            class="h-8 w-full group relative z-10 | flex flex-col justify-center overflow-hidden items-center | rounded-md bg-MQ_dark bg-opacity-25 drop-shadow-MQ | transition-all duration-500"
                            :class="submitting || type != 'none' ? 'opacity-0 delay-0' : 'opacity-100 delay-500'">
                            <div class="px-5 h-full | text-MQ_light group-hover:text-MQ_dark | group-hover:font-bold | z-10 | transition-all duration-500 | flex items-center text-sm">
                                Reset
                            </div>
                            <div class="absolute h-full left-0 w-0 group-hover:w-full bg-MQ_light group-hover:bg-MQ_red | transition-all duration-500"></div>
                        </button>
                        <img class="absolute | animate-spin_slow transition-all duration-500"
                            src="src/assets/Logos/macroquiet_logo_icon.png"
                            :class="submitting ? 'h-16 opacity-100 delay-500' : 'h-0 opacity-0 delay-0'">

                        <MQ_alert :show="type == 'success'" color="rgb(12, 173, 134)" icon="fa-solid fa-circle-check"
                            class="absolute top-0">
                            <b>Password reset successfully!</b>
                        </MQ_alert>
                    </div>

                </div>
            </Form>

        </div>
        <MQ_footer/>
    </div>
</template>

<script>
import axios from 'axios';
import MQ_textAreaInput from '../components/Global/MQ_inputs/MQ_textAreaInput.vue';
import MQ_textInput from '../components/Global/MQ_inputs/MQ_textInput.vue';
import MQ_h2 from '@/components/Global/MQ_h2/MQ_h2.vue';
import MQ_alert from '@/components/Global/MQ_alerts/MQ_alert.vue';
import { Form, Field } from 'vee-validate';
import { object, string } from 'yup';
import MQ_checkBoxInput from '../components/Global/MQ_inputs/MQ_checkBoxInput.vue';
import MQ_h2_small from '../components/Global/MQ_h2/MQ_h2_small.vue';
import MQ_GoogleLogInButton from '../components/Global/MQ_inputs/MQ_GoogleLogInButton.vue';
import MQ_footer from '../components/App/MQ_footer.vue';

let wait = function (seconds) {
    return new Promise((resolveFn) => {
        setTimeout(resolveFn, seconds * 1000);
    });
};

export default {
    name: "ResetPasswordView",
    components: { MQ_textInput, Form, Field, MQ_h2, MQ_textAreaInput, MQ_alert, MQ_checkBoxInput, MQ_h2_small, MQ_GoogleLogInButton, MQ_footer },
    setup() {
        const schema = object({
            "Password": string().required().label("Password"),
            "Password confirm": string().required().label("Password confirm"),
        });
        return {
            schema,
        };
    },
    data() {
        return {
            token: this.$route.query.token, // Get the token from the URL
            submitting: false,
            type: "none",
        };
    },
    methods: {
        async onSubmit(values) {
            if (values) {
                console.log(values);
                this.submitting = true;
                try {
                    await wait(2);
                    this.submitting = false;
                    await axios.post('/api/reset-password', { password: values.password, token: this.token });
                    this.type = "success";
                    await wait(2);
                    this.type = "none";
                } catch (e) {
                    await wait(2);
                    this.submitting = false;
                    this.type = "warning";
                    await wait(2);
                    this.type = "none";
                    console.error("Error sending message!");
                }
            }
        },
    },
};
</script>