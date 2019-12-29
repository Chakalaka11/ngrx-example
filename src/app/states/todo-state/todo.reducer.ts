import { createReducer, on } from '@ngrx/store';
import {
    addItem,
    removeItem,
    updateItem
} from './todo.actions';
import { getStateFromLocalStorage } from '../../helpers';
import { TodoState } from '../../models';

export const initialState: TodoState = getStateFromLocalStorage();

const _todoReducer = createReducer(
    initialState,
    on(addItem,
        (state, props) => {
            state.todoList.push(props.model);
            return state;
        }
    ),
    on(removeItem,
        (state, props) => {
            var itemIndex = state.todoList.indexOf(props.model);
            state.todoList.splice(itemIndex, 1);
            return state;
        }
    ),
    on(updateItem,
        (state, props) => {
            var index = state.todoList.indexOf(props.model);
            if (index === -1) {
                return state;
            }
            state.todoList[index].position = props.model.position;
            state.todoList[index].information = props.model.information;
            state.todoList[index].isChecked = props.model.isChecked;
            return state;
        }
    )
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}