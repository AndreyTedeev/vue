import { defineStore } from "pinia";
import { computed, provide, ref } from "vue";
import type { User } from "@/types/User";

const ItemsRef = ref<Array<User>>([
    { Id: 0, Name: "Guest" },
    { Id: 1, Name: "User #1" },
    { Id: 2, Name: "User #2" },
    { Id: 3, Name: "User #3" },
    { Id: 4, Name: "User #4" },
]);

const AuthRef = ref<User>(ItemsRef.value[0]);

export const useUserStore = defineStore("UserStore", {
    actions: {
        SetAuth(user: User) {
            AuthRef.value = user
        }
    },
    getters: {
        Auth() : User {
            return AuthRef.value;
        },
        Items() {
            return ItemsRef.value
        }
    }
})
