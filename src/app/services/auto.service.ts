import { Injectable } from '@angular/core';
import { AUTOS } from '../data/autos';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor() { }

  getAutos(){
    return AUTOS;
  }
}
