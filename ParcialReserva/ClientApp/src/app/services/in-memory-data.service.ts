import { Injectable } from '@angular/core';
import{Reserva} from '../models/reserva';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {
createDb(){
  const Reserva= [
    { Identificacion:'001', Nombre: 'Pedro Picapiedra', NSillas:2, Tipo:true },
    { Identificacion:'002', Nombre: 'Vilma Picapiedra', NSillas:3, Tipo:false }
  ];
  return{Reserva};
  }
}
