import { Component, inject } from '@angular/core';
import { CarrelloService } from '../../services/carrello.service';

@Component({
  selector: 'app-carrello-mini',
  imports: [],
  templateUrl: './carrello-mini.component.html',
  styleUrl: './carrello-mini.component.css'
})
export class CarrelloMiniComponent {
  carrelloService: CarrelloService = inject(CarrelloService); // servizio per la gestione del carrello
}
