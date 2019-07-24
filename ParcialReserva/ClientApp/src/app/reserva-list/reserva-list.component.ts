import { Component, OnInit } from '@angular/core';
import {ReservaService}from'../services/reserva.service';
import {Reserva} from '../models/reserva';

@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html',
  styleUrls: ['./reserva-list.component.css']
})
export class ReservaListComponent implements OnInit {
 reservas: Reserva[];

  constructor(private reservaService:ReservaService) { }

  ngOnInit() {
    this.getAll();
  }
getAll(){
  this.reservaService.getAll().subscribe(reservas=>this.reservas=reservas);
}
}
