import axios from "axios";
import { defineStore, acceptHMRUpdate } from "pinia";
import { computed, ref } from "@vue/reactivity";

import type { TodoItem } from "@/types/TodoItem";

const ItemsRef = ref<Array<TodoItem> | null>(null);
const IsLoadedRef = computed<boolean>(() => ItemsRef.value != null);

export const useTodoStore = defineStore("TodoStore", {
    getters: {
        Items() {
            return ItemsRef.value
        },
        IsLoaded() {
            return IsLoadedRef.value
        }
    },
    actions: {
        async Load() {
            const url = "https://jsonplaceholder.typicode.com/posts";
            await this.LoadFromUrl(url);
        },

        async LoadFromUrl(url: string) {
            // TODO: remove after testing
            // this code line just a delay for a second to test IsLoaded functionality
            await new Promise(resolve => setTimeout(resolve, 1000));

            const response = await axios.get<TodoItem[]>(url);
            ItemsRef.value = response.data || [];
        }
    }

})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTodoStore, import.meta.hot))
}