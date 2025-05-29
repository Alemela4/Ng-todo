import { Component, inject, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
// import { TODOS } from '../../data/todos';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { TodoAddComponent } from "../todo-add/todo-add.component";
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent, TodoAddComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

  // alternativa 1 per richiedere il servizio
  // constructor(private todoService: TodoService){}

  // alternativa 2 per richiedere il servizio
  todoService: TodoService = inject(TodoService);

  todos: Todo[] = []; // todos è un array di oggetti di tipo Todo

  ngOnInit(): void { // OnInit è un interfaccia che rappresenta un metodo di inizializzazione dell'oggetto che viene chiamato quando l'oggetto viene inizializzato. Void è un tipo di dato che rappresenta un valore non definito
    this.todos = this.todoService.getTodos(); // qui ci sarà la chiamata ajax
  } 

  completa(id: number){ 
    console.log("Richiesta di completamento del todo con id: ", id);

    // qui ci sarà la chiamata ajax (cioè la chiamata al servizio) per completare il todo
    const todoDaCompletare = this.todos.find(t => t.id === id); // trova il todo con l'id passato come parametro

    if(todoDaCompletare){
      todoDaCompletare.completed = !todoDaCompletare.completed; // modifica il valore della proprietà completed del todo
    }
  }
 
  inserisciNuovoTodo(testo: string){
    // qui ci sarà la richiesta ajax per inserire un nuovo todo
    const ids: number[] = this.todos.map(t => t.id); // trasformo l'array di todos in array di id (numbers)
    const nuovoId = Math.max(...ids) + 1; // questo è un'espressione di calcolo che restituisce il massimo di tutti gli id
    const nuovoTodo: Todo = {
      id: nuovoId,
      text: testo,
      completed: false
    }
    this.todos.push(nuovoTodo); // aggiungo il nuovo todo all'array di todos
  }
}
