import { TodoModel } from './todo.model';

class TodoState {
    todoList: TodoModel[]
    constructor(todoList: TodoModel[]) {
        this.todoList = todoList;
    }
}

export { TodoState };