import { Component, OnInit } from '@angular/core';
import {MaterialModule} from '../material/material.module';
import {ArticuloComponent} from '../articulo/articulo.component'
@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {

  declarations: [
   ]
  imports: [
    ArticuloComponent,
    MaterialModule
  ]
  providers: []
  constructor() { }

  ngOnInit() {
  }
 opened=false;
}
