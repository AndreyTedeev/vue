<script setup lang="ts">
import { useTodoStore } from "@/stores/TodoStore";
import { onMounted } from "vue";
import type { User } from "@/types/User";
import { useUserStore } from "@/stores/UserStore";

const TodoStore = useTodoStore();
const UserStore = useUserStore();

onMounted(() => {
  if (!TodoStore.IsLoaded) {
    TodoStore.Load();
  }
});
</script>

<template>
  {{UserStore.Auth.Name}}
  <div v-if="TodoStore.IsLoaded" class="todoApp">
    loaded!!!
  </div>
  <div v-else>
    no data yet...
  </div>
</template>
