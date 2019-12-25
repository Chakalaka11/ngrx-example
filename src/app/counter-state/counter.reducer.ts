import { createReducer, on } from '@ngrx/store';
import {
    addItem, 
    checkIn,
    checkOut,
    removeItem,
    updateInfo,
    updatePosition
} from './counter.actions';
import { getStateFromLocalStorage } from '../helpers/local-storage.helper';
import { TodoState } from '../models/todo.state.model';

export const initialState: TodoState = getStateFromLocalStorage();

const _todoReducer = createReducer(
    initialState,
    on(increment, state => state + 1),
    on(decrement, state => state - 1),
    on(reset, state => 0),
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}