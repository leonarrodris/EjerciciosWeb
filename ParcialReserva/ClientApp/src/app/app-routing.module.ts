import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReservaListComponent} from './reserva-list/reserva-list.component';
import {ReservaAddComponent} from './reserva-add/reserva-add.component';
import {ReservaEditComponent} from './reserva-edit/reserva-edit.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes =[
  {path:'reservalist',
  component: ReservaListComponent},
  {path: 'reservaadd',
  component: ReservaAddComponent},
  {path: 'reservaedit',
  component: ReservaEditComponent}


];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
