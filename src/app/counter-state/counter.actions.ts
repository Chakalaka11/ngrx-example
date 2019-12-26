import { createAction, props } from '@ngrx/store';
import { TodoModel } from '../models/todo.model';

export const addItem = createAction('[Todo Component] Add Item', props<{ payload: TodoModel }>());
export const removeItem = createAction('[Todo Component] Remove Item', props<{ payload: number }>());
export const updateItem = createAction('[Todo Component] Update Item', props<{ payload: TodoModel }>());