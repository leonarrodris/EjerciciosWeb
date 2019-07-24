import { Component, OnInit } from '@angular/core';
import { TaskData } from '@angular/core/src/testability/testability';
import {Reserva} from '../modelo/reserva';
import {ReservaAddService}from '../servicio/reserva-add.service';

@Component({
  selector: 'app-registo-reserva',
  templateUrl: './registo-reserva.component.html',
  styleUrls: ['./registo-reserva.component.css']
})
export class RegistoReservaComponent implements OnInit {

  reserva:Reserva;
  constructor(private reservaAddService:ReservaAddService) { }

  ngOnInit() {
    this.reserva={Identificacion:'',Nombre:'',Tipo:false, NSillas:0}
    console.log('se inicializa el objeto reserva');
    console.log(this.reserva);
  }

  add():void
  {
    this.reservaAddService.add(this.reserva);
  alert('se registro una reserva');
  console.log(this.reserva);
  }
}
