<template>
    <div class="h-1 min-w-[256px] mr-5 rounded-full bg-MQ_lighter relative flex items-center">
                
        <div v-if="id == 0" class="h-1 w-4 absolute -left-5 -bottom-1 bg-MQ_lighter rotate-45 rounded-full"></div>
        <div v-if="id == 0" class="h-1 w-4 absolute -left-5 -top-1 bg-MQ_lighter -rotate-45 rounded-full"></div>

        <div v-if="id == 0" class="h-1 w-6 absolute -left-9 -bottom-2 bg-MQ_lighter rotate-45 rounded-full"></div>
        <div v-if="id == 0" class="h-1 w-6 absolute -left-9 -top-2 bg-MQ_lighter -rotate-45 rounded-full"></div>

        <div v-if="id == l - 1" class="h-3 w-3 absolute -right-5 bg-MQ_red rotate-45 rounded-sm"></div>
        <div v-else class="h-2 w-2 absolute -right-3.5 bg-MQ_red rotate-45 rounded-sm"></div>

        <div v-if="id == l - 1" class="h-7 w-7 absolute -right-7 border-MQ_lighter border-3 rotate-45 rounded-sm"></div>
        <div v-else class="h-5 w-5 absolute -right-5 border-MQ_lighter border-3 rotate-45 rounded-sm"></div>

        <div class="absolute -right-[74px] h-32 w-32 | flex justify-center" :class="id % 2 == 0 ? 'bottom-11' : 'top-11'">

            <div v-if="id != l - 1" class="w-1 h-5 rounded-full bg-MQ_lighter absolute flex justify-center items-center" :class="id % 2 == 0 ? '-bottom-8' : '-top-8'">
                <!--DATE-->
                <div v-if="timelineStore.timelineEditing != t._id && !deletePrompt" class="whitespace-nowrap absolute text-sm text-MQ_red font-bold" :class="id % 2 == 0 ? 'top-12' : 'bottom-12'"> {{ formatDateReverse(t.date) }} </div>
                <div v-else-if="!deletePrompt" class="whitespace-nowrap absolute text-sm text-MQ_red font-bold flex justify-center items-center" :class="id % 2 == 0 ? 'top-12' : 'bottom-12'"> 
                    <VueDatePicker dark :class="id % 2 == 0 ? 'top-0' : 'bottom-0'" class="absolute w-36 z-10 peer" v-model="t.date"
                        text-input model-type="dd.mm.yyyy" auto-apply :enable-time-picker="false"/>
                    <div :class="id % 2 == 0 ? 'top-0' : 'bottom-0'" class="outline-none border-[1px] border-MQ_light border-opacity-25 peer-hover:border-MQ_red text-center bg-MQ_dark bg-opacity-75 w-36 
                                                                              rounded-md py-1 whitespace-nowrap absolute text-sm text-MQ_red font-bold transition-all duration-300" 
                    type="text">{{ formatDateReverse(t.date) }}</div> 
                </div>
                <!--DELETE-->
                <div v-if="timelineStore.timelineEditing == '' || deletePrompt" class="absolute drop-shadow-MQ text-MQ_lighter hover:text-MQ_red font-bold text-xl | flex justify-center items-center"
                    :class="id % 2 == 0 ? 'top-[70px]' : 'bottom-[70px]'">
                    <i v-if="!deletePrompt" @click="deletePrompt = true; timelineStore.timelineEditing = 'deletePrompt';" class="fa-solid fa-trash-can cursor-pointer mt-1"></i>
                    <div v-else class="absolute w-fit px-5 py-1 bg-MQ_dark bg-opacity-50 | flex flex-col justify-center items-center
                        hover:text-MQ_light rounded-xl | text-sm" :class="id % 2 == 0 ? 'mt-1' : 'mb-1'">
                        <div class="whitespace-nowrap font-normal text-MQ_light">Are you sure?</div>
                        <div class="w-full flex justify-evenly gap-2">
                            <div @click="deletePrompt = false; timelineStore.timelineEditing = '';" class="hover:font-bold font-normal text-MQ_red hover:underline cursor-pointer">NO</div>
                            <div @click="deletePrompt = false; timelineStore.removeTimelineCard(t._id);" class="hover:font-bold font-normal text-MQ_green hover:underline cursor-pointer">YES</div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="w-1 h-4 ml-2 rounded-full bg-MQ_lighter absolute flex justify-center items-center" :class="id % 2 == 0 ? '-bottom-[26px]' : '-top-[26px]'">
                <!--DATE-->
                <div v-if="timelineStore.timelineEditing != t._id && !deletePrompt" class="whitespace-nowrap absolute text-xl text-MQ_red font-bold underline" :class="id % 2 == 0 ? 'top-14' : 'bottom-14'"> {{ formatDateReverse(t.date) }} </div>
                <div v-else-if="!deletePrompt" class="whitespace-nowrap absolute text-xl text-MQ_red font-bold flex justify-center items-center" :class="id % 2 == 0 ? 'top-12' : 'bottom-12'"> 
                    <VueDatePicker dark :class="id % 2 == 0 ? 'top-0' : 'bottom-0'" class="absolute w-40 z-10 peer" v-model="t.date" 
                        text-input model-type="dd.mm.yyyy" auto-apply :enable-time-picker="false"/>
                    <div :class="id % 2 == 0 ? 'top-2' : 'bottom-2' " class="outline-none border-[1px] border-MQ_light border-opacity-25 peer-hover:border-MQ_red text-center bg-MQ_dark bg-opacity-75 w-40 
                                                                                rounded-md py-1 whitespace-nowrap absolute text-xl text-MQ_red font-bold transition-all duration-300" 
                    type="text">{{ formatDateReverse(t.date) }}</div> 
                </div>
                <!--DELETE-->
                <div v-if="timelineStore.timelineEditing == '' || deletePrompt" class="absolute drop-shadow-MQ text-MQ_lighter hover:text-MQ_red font-bold text-3xl mt-1 | flex justify-center items-center"
                    :class="id % 2 == 0 ? 'top-[88px]' : 'bottom-[80px]'">
                    <i v-if="!deletePrompt" @click="deletePrompt = true; timelineStore.timelineEditing = 'deletePrompt';" class="fa-solid fa-trash-can"></i>
                    <div v-else class="absolute w-fit px-5 py-1 bg-MQ_dark bg-opacity-50 | flex flex-col justify-center items-center cursor-pointer
                        hover:text-MQ_light rounded-xl | text-sm" :class="id % 2 == 0 ? 'mt-1' : 'mb-1'">
                        <div class="whitespace-nowrap font-normal text-MQ_light">Are you sure?</div>
                        <div class="w-full flex justify-evenly gap-2">
                            <div @click="deletePrompt = false; timelineStore.timelineEditing = '';" class="hover:font-bold font-normal text-MQ_red hover:underline cursor-pointer">NO</div>
                            <div @click="deletePrompt = false; timelineStore.removeTimelineCard(t._id);" class="hover:font-bold font-normal text-MQ_green hover:underline cursor-pointer">YES</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="min-w-fit | snap-center flex flex-col | group | bg-MQ_dark bg-opacity-25 | drop-shadow-md hover:drop-shadow-MQ border-MQ_red border-2 | transition-all duration-500"
                :class="[id % 2 == 1 ? 'self-start flex-col-reverse rounded-b-xl' : 'self-end flex-col rounded-t-xl', timelineStore.timelineEditing == t._id ? 'border-opacity-100' : 'border-opacity-0']">

                <div :class="[timelineStore.timelineEditing == t._id ? id % 2 == 1 ? 'rounded-b-xl border-t-[1px]' : 'rounded-t-xl border-b-[1px]' : id % 2 == 1 ? 'rounded-b-xl' : 'rounded-t-xl']" 
                    class="px-4 pt-2 pb-4 grow flex flex-col bg-MQ_dark min-w-full xs:min-w-[300px] max-w-[300px] xs:max-w-md | transition-all duration-500 | border-MQ_light border-opacity-25">
                    <div v-if="timelineStore.timelineEditing != t._id" class="scrollbar-h-1 text-lg | w-full text-MQ_light group-hover:text-MQ_lighter font-bold pt-1 uppercase | transition-all duration-500 | whitespace-nowrap overflow-x-auto | title"> 
                        <i :class="t.icon" class="text-MQ_red"></i>
                        {{ t.title }} 
                    </div>
                    <div v-else class="flex items-center justify-start scrollbar-h-1 text-lg | w-full text-MQ_light group-hover:text-MQ_lighter font-bold pt-1 uppercase | transition-all duration-500 | whitespace-nowrap overflow-x-auto | title">
                        <!--ICONS-->
                        <i @click="showIcons = !showIcons;" :class="t.icon" class="text-MQ_red hover:text-MQ_light relative | transition-all">
                            <div @mouseleave ="showIcons = false" :class="id % 2 == 1 ? 'bottom-10' : 'top-10'" v-if="showIcons" class="fixed left-4 z-50 w-fit h-fit bg-MQ_dark border-[1px] border-MQ_light border-opacity-30 p-2 rounded-md gap-2 grid grid-cols-7">
                                <i v-for="icon in icons" @click="t.icon = icon;" :class="icon + ' text-MQ_light hover:text-MQ_red cursor-pointer transition-all'"></i>
                            </div>
                        </i>
                        <!--TITLE-->
                        <input class="outline-none border-none w-full bg-transparent uppercase title ml-1" type="text" v-model="t.title">
                    </div>
                </div>

                <div class="min-h-full max-h-64 min-w-[334px] max-w-[440px] overflow-y-auto flex flex-col relative" :class="timelineStore.timelineEditing != t._id ? 'px-4 pt-2' : ''">
                    <div v-if="timelineStore.timelineEditing != t._id" class="textEditor text-sm | w-full text-MQ_light text-opacity-75 group-hover:text-MQ_light group-hover:text-opacity-100 |  grow | transition-all duration-500 | pb-4" v-html="t.text"></div>
                    <!--TEXT EDIT-->
                    <QuillEditor :class="id % 2 == 1 ? 'roundmetop' : ''" class="text-sm text-MQ_light text-opacity-75 border-0" v-if="timelineStore.timelineEditing == t._id" v-model:content="t.text" contentType="html" theme="snow" :toolbar="toolbar" />
                    
                    <!--EDIT-->
                    <i v-if="timelineStore.timelineEditing != t._id && timelineStore.timelineEditing == ''" class="fa-solid fa-edit text-MQ_light hover:text-MQ_red cursor-pointer fixed z-50 bottom-2 right-3 text-2xl" 
                            :class="id % 2 == 1 ? 'top-2' : 'bottom-2'" @click="timelineStore.timelineEditing = t._id;"></i>
                    <!--SAVE-->
                    <i v-if="timelineStore.timelineEditing == t._id" class="fa-solid fa-save text-MQ_light hover:text-MQ_red cursor-pointer fixed z-40 right-3 text-2xl" 
                        :class="id % 2 == 1 ? 'bottom-16' : 'bottom-2'" @click="timelineStore.timelineEditing = ''; save(t._id);"></i>
                    <!--CANCEL-->
                    <i v-if="timelineStore.timelineEditing == t._id" class="fa-solid fa-circle-xmark text-MQ_light hover:text-MQ_red cursor-pointer fixed z-40 left-3 text-2xl" 
                        :class="id % 2 == 1 ? 'bottom-16' : 'bottom-2'" @click="timelineStore.timelineEditing = ''; reset();"></i>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
import { useTimelineStore } from '@/stores/timelineStore'
export default {
    name: "MQ_timelineCardEdit",
    props: {
        t: Object,
        id: Number,
        l: Number,
    },
    setup() {
        const timelineStore = useTimelineStore()
        return { timelineStore }
    },
    data() {
        return {
            deletePrompt: false,
            html: this.t.text,
            title: this.t.title,
            icon: this.t.icon,
            date: this.formatDate(this.t.date),
            toolbar: [[
                'bold', 'italic', 'underline', 'strike', {'align': []},
                { 'color': ['#06060a', '#13131f', '#0f1119', '#EF5350', '#16a34a', '#15171e', '#cbd5e1', '#e2e8f0', '#94a3eb', '#94a3b8'] },
                { 'background': ['#00000000', '#06060a', '#13131f', '#0f1119', '#EF5350', '#16a34a', '#15171e', '#cbd5e1', '#e2e8f0', '#94a3eb'] },
                'link', 'video', 'image', 'clean'
            ]],
            showIcons: false,
            icons: [
                "fa-solid fa-user",
                "fa-solid fa-gamepad",
                "fa-solid fa-download",
                "fa-solid fa-bell",
                "fa-solid fa-champagne-glasses",
                "fa-solid fa-mug-hot",
                "fa-solid fa-star",
                "fa-solid fa-image",
                "fa-solid fa-music",
                "fa-solid fa-video",
                "fa-solid fa-cloud",
                "fa-solid fa-comment",
                "fa-solid fa-heart",
                "fa-solid fa-gift",
                "fa-solid fa-ghost",
                "fa-solid fa-fire",
                "fa-solid fa-thumbtack",
                "fa-solid fa-handshake",
                "fa-solid fa-snowflake",
                "fa-solid fa-palette",
                "fa-solid fa-users",
                "fa-solid fa-clock",
                "fa-solid fa-bug",
                "fa-solid fa-hammer",
                "fa-solid fa-shield",
                "fa-solid fa-desktop",
                "fa-solid fa-laptop",
                "fa-solid fa-mobile-screen",
                "fa-brands fa-youtube",
                "fa-brands fa-twitter",
                "fa-brands fa-reddit",
                "fa-brands fa-google",
                "fa-brands fa-discord",
            ]
        }
    },
    methods: {
        reset() {
            this.t.text = this.html;
            this.t.icon = this.icon;
            this.t.title = this.title;
            this.t.date = this.date;
        },
        save(id) {
            this.html = this.t.text;
            this.icon = this.t.icon;
            this.title = this.t.title;
            this.date = this.t.date;
            let data = {
                date: this.t.date,
                icon: this.t.icon,
                text: this.t.text,
                title: this.t.title,
            }
            this.timelineStore.saveTimelineCard(id, data);
        },
        formatDate(d) {
            const months = {
                "January": 1,
                "February": 2,
                "March": 3,
                "April": 4,
                "May": 5,
                "June": 6,
                "July": 7,
                "August": 8,
                "September": 9,
                "October": 10,
                "November": 11,
                "December": 12,
            };
            const day = d.slice(0, 2).replace(/\./g, ' ').trim();
            const monthIndex = d.replace(/[0-9]/g, '').trim().slice(0, -1);
            const year = d.slice(-4).trim();
            const month = months[monthIndex];
            if (month != undefined) {
                this.t.date = `${day}.${month}.${year}`;
                return `${day}.${month}.${year}`;
            }
            else return d;
        },
        formatDateReverse(d) {
            const months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];

            let day = d.slice(0, 2).replace(/\./g, ' ').trim();
            if (day[0] == '0')
                day = day[1];
            let monthIndex = d.slice(-7, -4).replace(/\./g, ' ').trim();
            if (monthIndex[0] == '0') 
                monthIndex = monthIndex[1];
            let year = d.slice(-4).trim();

            let month = months[monthIndex];

            return `${day} ${month}, ${year}`;
        },
    }
}
</script>