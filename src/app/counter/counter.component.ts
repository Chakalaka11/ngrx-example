import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addItem, removeItem } from '../counter-state/counter.actions';
import { TodoModel } from '../models/todo.model';
import { TodoState } from '../models/todo.state.model';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html',
    styles: []
})

export class CounterComponent {
    todoState: Observable<TodoState>;

    constructor(
        private store: Store<{ todoStore: TodoState }>) {
        this.todoState = store.pipe(select('todoStore'));
    }

    addElement() {
        var model: TodoModel = new TodoModel("", 0);
        this.store.dispatch(addItem({ payload: model }));
    }
    
    removeElement() {
        this.store.dispatch(removeItem({ payload: 1 }));
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
