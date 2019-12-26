import { createReducer, on } from '@ngrx/store';
import {
    addItem,
    removeItem,
    updateItem
} from './counter.actions';
import { getStateFromLocalStorage } from '../helpers/local-storage.helper';
import { TodoState } from '../models/todo.state.model';
import { TodoModel } from '../models/todo.model';

export const initialState: TodoState = getStateFromLocalStorage();

const _todoReducer = createReducer(
    initialState,
    on(addItem,
        (state, props) => {
            state.todoList.push(props.payload);
            return state;
        }
    ),
    on(removeItem,
        (state, props) => {
            state.todoList.splice(props.payload, 1);
            return state;
        }
    ),
    on(updateItem,
        (state, props) => {
            var index = state.todoList.indexOf(props.payload);
            if (index === -1) {
                return state;
            }
            state.todoList[index].position = props.payload.position;
            state.todoList[index].information = props.payload.information;
            state.todoList[index].isChecked = props.payload.isChecked;
            return state;
        }
    )
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}