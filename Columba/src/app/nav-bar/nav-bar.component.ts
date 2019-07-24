import { Component, OnInit } from '@angular/core';
import {MaterialModule} from '../material/material.module';
import {SideNavBarComponent} from '../side-nav-bar/side-nav-bar.component';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  declarations: [
   
    NavBarComponent
  ]
  imports: [
   SideNavBarComponent,
    MaterialModule
  ]
  providers: []
  
  constructor() { }

  ngOnInit() {

    
  
  }

}
