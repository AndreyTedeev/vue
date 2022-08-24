export interface ITodoItem {
    userId: number
    id: number
    title: string
    body: string
}

export class TodoItem implements ITodoItem{
    userId: number = 0
    id: number =0
    title: string = ""
    body: string = ""
    isCompleted: boolean = false
}