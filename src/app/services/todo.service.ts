import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { TODOS } from '../data/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() { }

  getTodos(){
    // simula la chiamata ajax al server per recuperare i todo
    return TODOS;
  }
}


