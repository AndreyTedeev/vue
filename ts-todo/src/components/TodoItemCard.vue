<script setup lang="ts">
import type { TodoItem } from '@/types/TodoItem';
import { computed } from '@vue/reactivity';
import { reactive, ref } from 'vue';

const props = defineProps<{
    item: TodoItem
}>()

const icon = computed<String>((state) => {
    console.log(state.item)
    if (state.item.isCompleted) {
        return "fa-solid fa-square-check";
    }
    else {
        return "fa-solid fa-square";
    }
})

defineEmits<{
    (e: '@completed', itemId: Number): void
}>();
</script>

<template>
    <div class="todo-item">
        <div class="todo-title">
            <span :class="{ 'completed': item.isCompleted }" style="cursor: pointer;">{{ item.title }}</span>
            <font-awesome-icon v-if="item.isCompleted" class="icon-button" icon="fa-solid fa-square-check" border
                color="hsla(160, 100%, 37%, 1)" @click="$emit('@completed', item.id)" title="toggle completed" />
            <font-awesome-icon v-else class="icon-button" icon="fa-solid fa-square" border
                color="hsla(160, 100%, 37%, 1)" @click="$emit('@completed', item.id)" title="toggle completed" />
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
}

.todo-item {
    border-radius: 5px;
    border: 3px solid hsla(160, 100%, 37%, 1);

}

.todo-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    background: var(--color-background);
    color: hsla(160, 100%, 37%, 1);
    font-weight: bold;
}

.todo-body {
    padding: 5px;
    background: var(--color-background);
}
</style>