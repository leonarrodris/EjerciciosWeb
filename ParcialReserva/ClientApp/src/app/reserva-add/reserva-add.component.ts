import { Component, OnInit } from '@angular/core';
import {ReservaService} from '../services/reserva.service';
import{Reserva} from '../models/reserva';
@Component({
  selector: 'app-reserva-add',
  templateUrl: './reserva-add.component.html',
  styleUrls: ['./reserva-add.component.css']
})
export class ReservaAddComponent implements OnInit {

  constructor(private reservaService: ReservaService) { }
 reserva: Reserva;
  ngOnInit() {
    this.reserva={Id:0,Identificacion:0,Nombre:'',NSillas:0, Tipo:false}; 
  }
add(){
  this.reservaService.addReserva(this.reserva).subscribe(reserva=>{alert('Se Agrego una nueva Reserva')});
}
}
