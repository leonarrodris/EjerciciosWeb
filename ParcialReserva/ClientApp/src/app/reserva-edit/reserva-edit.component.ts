import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservaService } from'../services/reserva.service';
import { Reserva } from '../models/reserva';
import { Location } from '@angular/common';
@Component({
  selector: 'app-reserva-edit',
  templateUrl: './reserva-edit.component.html',
  styleUrls: ['./reserva-edit.component.css']
})
export class ReservaEditComponent implements OnInit {
  reserva: Reserva;
  sreserva:string;
  

  constructor(
    private route: ActivatedRoute,
    private reservaService: ReservaService,
    private location:Location
  ) { 
    }

  ngOnInit() {
  this.get();
  }
  get(): void{
     
    const id=+this.route.snapshot.paramMap.get('Identificacion');
    this.reservaService.get(id.toString()).subscribe(hero =>this.reserva= hero);

  }



  goBack(): void {
    this.location.back();
  }


}
