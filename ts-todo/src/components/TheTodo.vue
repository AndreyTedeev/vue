<script setup lang="ts">
import { useTodoStore } from "@/stores/TodoStore";
import type { TodoItem } from "@/types/TodoItem";
import { onMounted, ref } from "vue";
import TodoItemCard from "./TodoItemCard.vue";
import TodoItemEdit from "./TodoItemEdit.vue";

const todoStore = useTodoStore();

onMounted(() => {
  if (!todoStore.IsLoaded) {
    todoStore.Load();
  }
});

const editItemIdRef = ref<Number | null>(null)

const isEditingItem = (item: TodoItem) => {
  return editItemIdRef.value == item?.id
}

const handleCompleted= (itemId: Number) => {
  todoStore.ToggleCompleted(itemId)
}

const handleEdit= (itemId: Number | null) => {
  editItemIdRef.value = itemId;
}

const cancelEdit = () => {
  editItemIdRef.value = null;
}

const saveEdit = (title: string, body: string) => {
  todoStore.Upsert(editItemIdRef.value, title, body)
  editItemIdRef.value = null;
}
</script>

<template>
  <div v-if="todoStore.IsLoaded" class="todoApp">
    <h4>Loaded {{ todoStore.Items.length }} items for: '{{ todoStore.Auth.name }}'</h4>
    <TodoItemEdit :item="null" @@cancel="cancelEdit" @@save="saveEdit"></TodoItemEdit>
    <div style="margin-top: 10px;" v-for="item in todoStore.ReversedItems">
      <TodoItemEdit v-if="isEditingItem(item)" :item="item" @@cancel="cancelEdit" @@save="saveEdit"></TodoItemEdit>
      <TodoItemCard v-else :item="item" @@completed="handleCompleted" @@edit="handleEdit"></TodoItemCard>
    </div>
  </div>
  <div v-else>
    Loading todo items ...
  </div>
</template>
