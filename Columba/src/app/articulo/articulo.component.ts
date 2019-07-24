import { Component, OnInit } from '@angular/core';
import {MaterialModule} from '../material/material.module';
@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  
  imports:[MaterialModule]
  constructor() { }

  ngOnInit() {
  }

}
