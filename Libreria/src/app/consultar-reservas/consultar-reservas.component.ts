import { Component, OnInit } from '@angular/core';
import {ReservaAddService}from '../servicio/reserva-add.service'
import {Reserva} from '../modelo/reserva';
@Component({
  selector: 'app-consultar-reservas',
  templateUrl: './consultar-reservas.component.html',
  styleUrls: ['./consultar-reservas.component.css']
})
export class ConsultarReservasComponent implements OnInit {

  reservas: Reserva[];
  constructor(private recervaAddService: ReservaAddService) { }

  
  ngOnInit() {
    this.reservas= this.recervaAddService.getAll();
  }

}
