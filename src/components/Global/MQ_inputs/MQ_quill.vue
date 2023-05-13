<template>
    <div>
        <div class="fixed w-full h-full top-0 left-0 p-64">
            <div class="w-full h-full bg-opacity-75 text-MQ_light">
                <QuillEditor v-model:content="globalStore.html" contentType="html" theme="snow" :toolbar="
                [
                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                //['blockquote', 'code-block'],

                //[{ 'header': 1 }, { 'header': 2 }],               // custom button values
                //[{ 'list': 'ordered'}, { 'list': 'bullet' }],
                //[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                //[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                //[{ 'direction': 'rtl' }],                         // text direction

                //[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                //[{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                [{ 'color': ['#06060a','#13131f','#0f1119','#EF5350','#16a34a','#15171e','#cbd5e1','#e2e8f0', '#94a3eb', '#94a3b8'] }, 
                 { 'background': ['#00000000', '#06060a', '#13131f', '#0f1119', '#EF5350', '#16a34a', '#15171e', '#cbd5e1', '#e2e8f0', '#94a3eb', '#94a3b8'] }],          // dropdown with defaults from theme
                //[{ 'align': [] }],

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
.dp__menu, .dp__overlay_container {
    background-color: rgba(6, 6, 10) !important;
    border: 1px solid rgb(75, 85, 99) !important;
    .dp__arrow_top, .dp__arrow_bottom {
        background-color: #EF5350 !important;
        border: 1px solid rgb(75, 85, 99) !important;
    }
    .dp__active_date, .dp__overlay_cell_active {
        background-color: #EF5350 !important;
        color: rgba(6, 6, 10) !important;
    }
    .dp__cell_inner, .dp__month_year_select, .dp__overlay_cell {
        &:hover {
            background-color: rgba(75, 85, 99) !important;
        }
    }
}
.dp__overlay_action {
    background-color: rgba(6, 6, 10) !important;
    border: 1px solid rgb(75, 85, 99) !important;
    color: #EF5350 !important;
    &:hover {
        text-decoration: underline;
    }   
    &::after {
        content: "BACK";
    }
}
.dp__icon {
    display: none !important;
}
.dp__input_wrap, .dp__input {
    opacity: 0;
    cursor: pointer !important;
}
.ql-snow {
    border: none !important;
}
.ql-toolbar {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    position: fixed;
    display: flex;
    justify-content: center !important;
    align-items: center !important;
    z-index: 32;
    width: 100%;
    justify-content: space-left;
    background-color: rgba(6, 6, 10);
    border: 1px solid rgb(75, 85, 99) !important;
    border-left: 0px !important;
    border-right: 0px !important;
    border-top: 0px !important;

    .ql-picker-options {
        background-color: rgba(6, 6, 10) !important;
        border: 1px solid !important;
        border-radius: 4px;
        z-index: 300;
    }

    .ql-formats {
        margin-right: 0px !important;
        display: flex !important;
        flex-wrap: nowrap !important;
        justify-items: center;
        align-items: center;
    }

    button,
    .ql-picker,
    .ql-picker-label {
        border-radius: 4px;
        border: none !important;
        transition: all 0.2s !important;
        svg {filter: brightness(150%);}

        &:hover {
            background-color: #EF5350 !important;
            font-weight: bold !important;
            svg {filter: brightness(0%);}
        }
    }
    .ql-picker-option, .ql-picker-item {
        svg {filter: brightness(100%) !important ;}
    }
}

.ql-editor {
    min-width: 316px;
    margin-top: 40px;
    padding-bottom: 40px !important;
    background-color: rgba(6, 6, 10, 0.25);
    text-align: justify !important;
}

.ql-picker-item {
    transition: all 0.1s !important;
    border: 1px solid rgb(75, 85, 99) !important;
    &:hover {
        transform: scale(120%);
    }
}

.ql-tooltip {
    z-index: 2000;
    position: fixed !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    width: fit-content !important;
    box-shadow: none !important;
    background-color: rgba(6, 6, 10, 1) !important;
    border: 1px solid rgb(75, 85, 99) !important;
    border-radius: 4px;
    &::before {
        content: none !important;
    }
    .ql-action, .ql-remove {
        color: #EF5350;
        &:hover {
            text-decoration: underline !important;
        }
    }
    .ql-preview {
        max-width: 150px !important;
        text-decoration: underline !important;
    }
    input {
        color: #cbd5e1;
        transition: all 0.2s !important;
        background-color: rgba(24, 24, 32, 1) !important;
        border: 1px solid rgba(6, 6, 10, 1) !important;
        border-radius: 4px;
        outline: none;
        &:hover {
            border: 1px solid #cbd5e1 !important;
        }
        &:focus {
            border: 1px solid #EF5350 !important;
        }
    }
}

/*.textEditor ul, ol {
    padding-left: 21px;
    li {
        margin-left: 8px;
        padding-left: 21px;
        &::before {
            margin-left: -21px;
            margin-right: 4.2px;
            content: "•";
        }
    }
}*/
</style>