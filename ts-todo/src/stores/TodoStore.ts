import axios from "axios";
import { defineStore, acceptHMRUpdate } from "pinia";
import { useUserStore } from "@/stores/UserStore";

import { TodoItem } from "@/types/TodoItem";

export const useTodoStore = defineStore("TodoStore", {
    state: () => {
        return {
            IsLoaded: false,
            Items: [] as TodoItem[],
        }
    },
    getters: {
        ReversedItems() : TodoItem[] {
            const clone = [...this.Items]
            return clone.reverse()
        },
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
                const newItem = new TodoItem();
                // max id + 1
                newItem.id = this.Items.reduce((op, item) => op = op > item.id ? op : item.id, 0) + 1; 
                newItem.userId = this.Auth.id
                newItem.title = title
                newItem.body = body
                // isCompleted is false by default
                this.Items.push(newItem);
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