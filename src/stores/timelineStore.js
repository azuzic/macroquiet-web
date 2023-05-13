import { defineStore } from "pinia";
import { Public, Admin } from "@/services";
import { nextTick } from "vue";

export const useTimelineStore = defineStore("timelineStore", {
    state: () => ({
        //UPDATING
        update: true,

        //TIMELINE
        timeline: [],
        timelineEditing: "",
    }),
    actions: {
        async setup() {
            this.timeline = await Public.getData("timeline");
            this.timeline = this.timeline.data.reverse();
            this.MQupdate();
        },
        async MQupdate() {
            this.update = false;
            await nextTick();
            this.update = true;
        },
        //TIMELINE
        async removeTimelineCard(id) {
            console.log(id);
            await Admin.deleteData("timeline/" + id);
            this.timeline = this.timeline.filter((item) => item._id !== id);
            this.MQupdate();
            this.timelineEditing = "";
        },
        async saveTimelineCard(id, data) {
            await Admin.putData("timeline/" + id, data);
        },
        async addTimelineCard() {
            let newTimelineCard = {
                date: this.date(),
                icon: "fa-brands fa-youtube",
                text: "text",
                title: "title",
            };
            let response = await Admin.postData("timeline", newTimelineCard);
            newTimelineCard["_id"] = response.data;
            this.timeline.unshift(newTimelineCard);
            this.MQupdate();
        },
        date() {
            const date = new Date();

            const day = date.getDate();
            const month = date.getMonth();
            const year = date.getFullYear();

            return `${day}.${month}.${year}`;
        },
    },
});
