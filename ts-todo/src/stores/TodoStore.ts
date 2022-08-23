import axios from "axios";
import { defineStore, acceptHMRUpdate } from "pinia";
import { useUserStore } from "@/stores/UserStore";

import type { TodoItem } from "@/types/TodoItem";

export const useTodoStore = defineStore("TodoStore", {
    state: () => {
        return {
            IsLoaded: false,
            Items: [] as TodoItem[],
        }
    },
    getters: {
        Auth() {
            const userStore = useUserStore();
            return userStore.Auth;
        }
    },
    actions: {
        ToggleCompleted(itemId: Number) {
            const item = this.Items.find(x => x.id == itemId)
            if (item) {
                item.isCompleted = !item.isCompleted
            }
        },
        Upsert(itemId: Number | null, title: string, body: string) {
            const item = this.Items.find(x => x.id == itemId)
            if (item) {
                item.title = title
                item.body = body
            }
            else {
                // Insert new todo
            }
        },
        async Load() {
            const url = "https://jsonplaceholder.typicode.com/posts";
            await this.LoadFromUrl(url);
        },

        async LoadFromUrl(url: string) {
            this.IsLoaded = false;

            // TODO: remove after testing
            // this code line just a delay for a second to test IsLoaded functionality
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Emulates REST API call to get items by user
            const response = await axios.get<TodoItem[]>(url);
            this.Items = response.data.filter(x => x.userId == this.Auth.id);
            this.IsLoaded = true;
        }
    }

})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTodoStore, import.meta.hot))
}