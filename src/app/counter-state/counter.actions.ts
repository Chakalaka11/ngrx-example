import { createAction } from '@ngrx/store';

export const addItem = createAction('[Todo Component] Add Item');
export const removeItem = createAction('[Todo Component] Remove Item');
export const checkIn = createAction('[Todo Component] Check In');
export const checkOut = createAction('[Todo Component] Check Out');
export const updatePosition = createAction('[Todo Component] Update Position');
export const updateInfo = createAction('[Todo Component] Update Info');