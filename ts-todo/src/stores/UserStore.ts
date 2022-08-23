import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from "@/types/User";

const ItemsRef = ref<User[]>([
    { Id: 0, Name: "Guest" },
    { Id: 1, Name: "User #1" },
    { Id: 2, Name: "User #2" },
    { Id: 3, Name: "User #3" },
    { Id: 4, Name: "User #4" },
]);
    
export const useUserStore = defineStore("UserStore", {
    state: () => {
        return {
            Auth: ItemsRef.value[0],
        }
    },
    getters: {
        Items() {
            return ItemsRef.value
        }
    }
})
