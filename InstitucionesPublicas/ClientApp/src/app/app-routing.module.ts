import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EstudianteAddComponent} from './estudiante-add/estudiante-add.component'
import {EstudianteListComponent} from './estudiante-list/estudiante-list.component'
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path:'Institucioneslist',
    component:EstudianteListComponent
  },
  {
    path:'EstudianteAdd',
    component:EstudianteAddComponent 
  }
];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
