import { environment } from 'src/environments/environment';
import { TodoState } from '../models/todo.state.model';

function getStateFromLocalStorage(): TodoState {
    var storedValue: TodoState = JSON.parse(localStorage.getItem(environment.localStorageKey));
    return storedValue || { todoList: [] };
}

function setLocalStorage(value: TodoState) {
    localStorage.setItem(environment.localStorageKey, JSON.stringify(value));
}


export { getStateFromLocalStorage, setLocalStorage };