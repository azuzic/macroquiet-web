<template>
    <div>
        <div class="fixed w-full h-full top-0 left-0 p-64">
            <div class="w-full h-full bg-opacity-75 text-MQ_light">
                <QuillEditor v-model:content="globalStore.html" contentType="html" theme="snow" :toolbar="
                [
                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                ['blockquote', 'code-block'],

                [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                [{ 'direction': 'rtl' }],                         // text direction

                [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                [{ 'color': ['#06060a','#13131f','#0f1119','#EF5350','#16a34a','#15171e','#cbd5e1','#e2e8f0', '#94a3eb'] }, 
                 { 'background': ['#06060a', '#13131f', '#0f1119', '#EF5350', '#16a34a', '#15171e', '#cbd5e1', '#e2e8f0', '#94a3eb'] }],          // dropdown with defaults from theme
                [{ 'align': [] }],

                ['link', 'video', 'image'],
                ['clean']                                         // remove formatting button
                ]
                " />
                <div @click="globalStore.timelineEditing = ''">EXIT</div>
            </div>
        </div>
    </div>
</template>

<script>
import { useGlobalStore } from '@/stores/globalStore'
export default {
    name: "MQ_quill",
    components: { },
    setup() {
        const globalStore = useGlobalStore()
        return { globalStore }
    },
}
</script>

<style lang="scss">
.ql-toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-left;
    background-color: black;

    button,
    .ql-picker,
    .ql-picker-label {
        border-radius: 100px;

        &:hover {
            background-color: #EF5350 !important;
            font-weight: bold !important;
        }
    }
}

.ql-editor {
    background-color: rgba(6, 6, 10, 0);
    color: #94a3eb;
}

.ql-picker-item {
    border: 1px solid black !important;
}

</style>