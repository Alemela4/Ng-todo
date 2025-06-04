import { Injectable } from '@angular/core';
import { Auto } from '../models/auto';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  autoNelCarrello: Auto[] = []; // array per memorizzare le auto nel carrello

  constructor() { }

  aggiungiACarrello(auto: Auto){
    this.autoNelCarrello.push(auto); // aggiunge l'auto al carrello
  }

  svuotaCarrello() {
    this.autoNelCarrello = []; // svuota il carrello
  }
}
