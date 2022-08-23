<script setup lang="ts">
import { useUserStore } from "@/stores/UserStore";

const UserStore = useUserStore();
defineProps<{
  msg: string
}>()

const ChangeUser = (e: Event) => {
  const el = e.target as HTMLSelectElement;
  const selected = UserStore.Items[el.selectedIndex];
  UserStore.Auth = selected;
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}, {{UserStore.Auth.Name}}</h1>
    <select @change="ChangeUser">
      <option v-for="user in UserStore.Items">
        {{ user.Name }}
      </option>
    </select>
    <h4>
      Just used a scaffolded welcome page
    </h4>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
