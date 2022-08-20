import { defineStore } from "pinia";

export const useTodoStore = defineStore("TodoStore", {
    state: () => {
        return {
            data: null
        }
    }
})