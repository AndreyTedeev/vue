import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from "@/types/User";

const ItemsRef = ref<User[]>([
    { id: 0, name: "Guest" },
    { id: 1, name: "User #1" },
    { id: 2, name: "User #2" },
    { id: 3, name: "User #3" },
    { id: 4, name: "User #4" },
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
