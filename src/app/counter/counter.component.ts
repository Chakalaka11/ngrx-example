import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter-state/counter.actions';

@Component({
    selector: 'counter',
    templateUrl: './counter.template.html',
    styles: []
})
export class CounterComponent {
    counterValue: Observable<number>;

    constructor(
        private store: Store<{ testStore: number }>) {
        this.counterValue = store.pipe(select('testStore'));
    }

    increment() {
        console.log(increment);
        this.store.dispatch(increment());
    }

    decrement() {
        console.log(decrement);
        this.store.dispatch(decrement());
    }

    clear() {
        console.log(reset);
        this.store.dispatch(reset());
    }
}
