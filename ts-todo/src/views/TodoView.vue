<script setup lang="ts">
import Thetodo from '@/components/TheTodo.vue'
import TheTodo from '../components/TheTodo.vue'
</script>

<template>
    <main>
      <TheTodo/>
    </main>
</template>

<style>
@media (min-width: 1024px) {
  .todoApp {
    /* min-height: 100vh; */
    /* display: flex; */
    align-items: top;
  }
}
</style>
