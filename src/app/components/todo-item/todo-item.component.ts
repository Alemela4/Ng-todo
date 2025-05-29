import { Component, Input, output } from '@angular/core';
import { Todo } from '../../models/todo';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input()
  todo?: Todo; // todo è un oggetto di tipo Todo e può essere nullo

  onRichiestaCompletamento = output<number>(); // onRichiestaCompletamento è un output che può essere utilizzato per inviare un messaggio al componente padre. Questo messaggio viene inviato quando il pulsante di completamento viene cliccato

  richiediCompletamento(){
    this.onRichiestaCompletamento.emit(this.todo!.id); // questo metodo invia un messaggio al componente padre con l'id del todo
  }
}
