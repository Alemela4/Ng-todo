import { Component } from '@angular/core';
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { AutoListComponent } from "./components/auto-list/auto-list.component";

@Component({
  selector: 'app-root',
  imports: [TodoListComponent, AutoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-todo';
}
