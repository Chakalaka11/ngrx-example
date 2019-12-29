import { createAction, props } from '@ngrx/store';
import { TodoModel } from '../../models';

export const addItem = createAction('[Todo Component] Add Item', props<{ model: TodoModel }>());
export const removeItem = createAction('[Todo Component] Remove Item', props<{ model: TodoModel }>());
export const updateItem = createAction('[Todo Component] Update Item', props<{ model: TodoModel }>());