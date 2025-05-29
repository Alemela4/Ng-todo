import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TODOS } from '../../data/todos';
import { TodoItemComponent } from "../todo-item/todo-item.component";

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit { // OnInit è un interfaccia che rappresenta un metodo di inizializzazione dell'oggetto che viene chiamato quando l'oggetto viene inizializzato
  ngOnInit(): void { // void è un tipo di dato che rappresenta un valore non definito
    this.todos = TODOS; // TODOS è un array di oggetti di tipo Todo. Qui ci sarà la chiamata ajax (cioè la chiamata al servizio) per recuperare i dati dal database
  } 
  todos: Todo[] = []; // todos è un array di oggetti di tipo Todo
}
