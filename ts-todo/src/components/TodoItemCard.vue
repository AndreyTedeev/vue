<script setup lang="ts">
import type { TodoItem } from '@/types/TodoItem';

const props = defineProps<{
    item: TodoItem
}>()

defineEmits<{
    (e: '@completed', itemId: Number): void,
    (e: '@edit', itemId: Number | null): void
}>();
</script>

<template>
    <div class="todo-item">
        <div class="todo-header">
            <div class="todo-title">
                <font-awesome-icon v-if="item.isCompleted" class="icon-button" icon="fa-solid fa-square-check"
                    color="hsla(160, 100%, 37%, 1)" @click="$emit('@completed', item.id)" title="toggle completed" />

                <font-awesome-icon v-else class="icon-button" icon="fa-solid fa-square" color="lightgrey"
                    @click="$emit('@completed', item.id)" title="toggle completed" />

                <font-awesome-icon v-if="!item.isCompleted" class="icon-button" icon="fa-solid fa-pencil" color="orange"
                    @click="$emit('@edit', item.id)" title="edit" />

                <span :class="{ 'completed': item.isCompleted }" class="todo-title-text">{{ item.title }}</span>
            </div>

        </div>
        <div class="todo-body" :class="{ 'completed': item.isCompleted }">{{ item.body }}</div>
    </div>

</template>

<style>
.completed {
    text-decoration: line-through;
}

.icon-button {
    cursor: pointer;
    margin-right: 10px;
}

.todo-item {
    border-radius: 5px;
    border: 3px solid hsla(160, 100%, 37%, 1);
}

.todo-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.todo-title {
    padding: 5px;
    background: var(--color-background);
    color: hsla(160, 100%, 37%, 1);
    font-weight: bold;
}

.todo-title-text {
    font-weight: bold;
}

.todo-body {
    padding: 5px;
    background: var(--color-background);
}
</style>