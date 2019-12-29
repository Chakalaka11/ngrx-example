import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addItem, removeItem } from '../../states';
import { TodoModel, TodoState } from '../../models';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})

export class CounterComponent {
    todoState: Observable<TodoState>;
    listLength: number;
    taskDescription: string;

    constructor(
        private store: Store<{ todoStore: TodoState }>) {
        this.todoState = store.pipe(select('todoStore'));
        this.todoState.subscribe(function (state) {
            console.log(state);
            this.listLength = state.todoList.length;
        });
    }

    addElement() {
        this.listLength++;
        var model: TodoModel = new TodoModel(this.taskDescription, this.listLength);
        this.store.dispatch(addItem({ model: model }));
        this.taskDescription = "";
    }

    removeElement(todoItem: TodoModel) {
        console.log(todoItem);
        this.store.dispatch(removeItem({ model: todoItem }));
    }

    // decrement() {
    //     console.log(decrement);
    //     this.store.dispatch(decrement());
    // }

    // clear() {
    //     console.log(reset);
    //     this.store.dispatch(reset());
    // }
}
