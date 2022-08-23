<script setup lang="ts">
import type { TodoItem } from '@/types/TodoItem';
import { onMounted, reactive, ref } from 'vue';

const props = defineProps<{
    item: TodoItem | null
}>()

const title = ref("")
const body = ref("")

onMounted(() => {
    title.value = props.item?.title || ""
    body.value = props.item?.body || ""
})

defineEmits<{
    (e: '@cancel'): void,
    (e: '@save', title: string, body: string): void
}>();

</script>

<template>
    <div class="todo-edit">
        <input class="todo-edit-input" type="text" v-model="title" placeholder="Title" />
        <textarea style="margin-top: 5px; resize: none; height: 4em;" v-model="body" placeholder="Details"></textarea>
        <div class="todo-edit-buttons">
            <button class="todo-edit-button" @click="$emit('@cancel')">Cancel</button>
            <button class="todo-edit-button" @click="$emit('@save', title, body)">Save</button>
        </div>
    </div>
</template>

<style>
.todo-edit {
    display: flex;
    flex-direction: column;
    padding: 5px;
    border-radius: 5px;
    border: 3px solid hsla(160, 100%, 37%, 1);
}

.todo-edit-buttons {
    margin-top: 5px;
    padding: 10px;
    display: flex;
    justify-content: end;
}

.todo-edit-button {
    margin-right: 5px;
    display: flex;
    justify-content: end;
}
</style>