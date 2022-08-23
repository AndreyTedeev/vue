<script setup lang="ts">
import { useTodoStore } from "@/stores/TodoStore";
import { onMounted } from "vue";
import TodoItemCard from "./TodoItemCard.vue";

const todoStore = useTodoStore();

onMounted(() => {
  if (!todoStore.IsLoaded) {
    todoStore.Load();
  }
});

const handleCompleted= (itemId: Number) => {
  todoStore.ToggleCompleted(itemId)
}
</script>

<template>
  <div v-if="todoStore.IsLoaded" class="todoApp">
    <h4>Loaded {{ todoStore.Items.length }} items for: '{{ todoStore.Auth.Name }}'</h4>
    <div style="margin: 10px;" v-for="item in todoStore.Items">
      <TodoItemCard :item="item" @@completed="handleCompleted"></TodoItemCard>
    </div>
  </div>
  <div v-else>
    Loading todo items ...
  </div>
</template>
