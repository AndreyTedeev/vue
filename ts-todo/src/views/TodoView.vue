<script setup lang="ts">
import { useTodoStore } from "@/stores/TodoStore";

const todoStore = useTodoStore();
</script>

<template>
  <div class="todoApp">
    {{todoStore.data || "no data yet"}}
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .todoApp {
    min-height: 100vh;
    display: flex;
    align-items: top;
  }
}
</style>
