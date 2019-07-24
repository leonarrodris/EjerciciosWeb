import { Component, OnInit } from '@angular/core';
import {ImpuestoService} from '../service/impuesto';
import {Impuesto}from '../models/impuesto'
@Component({
  selector: 'app-impuesto-add',
  templateUrl: './impuesto-add.component.html',
  styleUrls: ['./impuesto-add.component.css']
})
export class ImpuestoAddComponent implements OnInit {

  constructor(private impuestoService:ImpuestoService) { }
  impuesto:Impuesto;
  ngOnInit() {
    this.impuesto={id:0, NProducto:' ',GAlcohol:0, ValorPagar:0 }
  }

  add() {
    this.impuestoService.addImpuesto(this.impuesto)
    .subscribe(impuesto => {
    alert('Se agrego una nueva tarea')
    });
    }
}
