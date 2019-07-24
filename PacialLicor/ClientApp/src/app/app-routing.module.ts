import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import {ImpuestoAddComponent} from '../app/impuesto-add/impuesto-add.component';
import {ImpuestoEditComponent} from '../app/impuesto-edit/impuesto-edit.component';
import {ImpuestoListComponent} from '../app/impuesto-list/impuesto-list.component';
const routes: Routes = [
  {
  path:'list',
  component:ImpuestoListComponent
  },
  {
  path:'add',
  component:ImpuestoAddComponent
  }
  ];
@NgModule({
  declarations: [],
  imports:[ RouterModule.forRoot(routes),

    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
