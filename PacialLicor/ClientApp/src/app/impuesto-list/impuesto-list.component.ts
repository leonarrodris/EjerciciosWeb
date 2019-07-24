import { Component, OnInit } from '@angular/core';
import {ImpuestoService} from '../service/impuesto';
import {Impuesto} from '../models/impuesto';
@Component({
  selector: 'app-impuesto-list',
  templateUrl: './impuesto-list.component.html',
  styleUrls: ['./impuesto-list.component.css']
})
export class ImpuestoListComponent implements OnInit {
 impuestos:Impuesto[];
  constructor(private impuestoService:ImpuestoService) { }

  ngOnInit() {
    this.getAll();
    alert(JSON.stringify(this.impuestos));
  }
  getAll(){
    
    this.impuestoService.getAll().subscribe(impuestos=>this.impuestos=impuestos);
  
    }
}
