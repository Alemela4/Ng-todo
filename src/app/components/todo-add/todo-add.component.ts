import { Component, output } from '@angular/core';
import { Todo } from '../../models/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  imports: [FormsModule],
  styleUrl: './todo-add.component.css',
  template: `
  <div class="d-flex justify-content-between gap-2">
    <input type="text" class="form-control" [(ngModel)]="testo"> <!-- [(ngModel)] è un'espressione di binding che permette di collegare un modello a un input -->
    <button type="button" class="btn btn-primary" (click)="richiediInserimento()">
      <i class="bi bi-plus"></i> <!-- aggiungi un'icona di plus -->
    </button>
  </div>
  `,
})
export class TodoAddComponent {
  testo = "";

  onRichiestaInserimento = output<string>(); // creo il dispositivo che può generare eventi

  richiediInserimento(){
    this.onRichiestaInserimento.emit(this.testo); // genero l'evento: questo metodo invia un messaggio al componente padre con il testo inserito dall'utente
    this.testo = ""; // resetto il testo inserito dall'utente
  }
}
