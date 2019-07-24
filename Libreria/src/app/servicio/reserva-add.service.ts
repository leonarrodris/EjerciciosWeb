import { Injectable } from '@angular/core';
import {Reserva} from '../modelo/reserva';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
@Injectable({
  providedIn: 'root'
})
export class ReservaAddService {

  constructor() { }

  add(reserva:Reserva){

    let reservas:Reserva[]=[];

    if(localStorage.getItem('reservas')!=null)
    {
        reservas=JSON.parse(localStorage.getItem('reservas'));
    }
    reservas.push(reserva);
    localStorage.setItem('reservas',JSON.stringify(reservas));

    
  }

  getAll():Reserva[]
  {
    return JSON.parse(localStorage.getItem('reservas'));
  }
  
}

