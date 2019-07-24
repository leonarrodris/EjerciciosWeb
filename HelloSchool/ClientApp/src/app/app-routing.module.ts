import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { EstudianteAddComponent } from './estudiante-add/estudiante-add.component';
import {EstudianteListComponent} from './estudiante-list/estudiante-list.component';
import {FormEstudiantesComponent} from './form-estudiantes/form-estudiantes.component';
import { MatriculaEstComponent } from './matricula-est/matricula-est.component'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
{
  path:'formestudiantes',
  component:FormEstudiantesComponent
},

{ 
  path:'estudianteadd',
  component:EstudianteAddComponent
},
{
  path:'estudiantelist',
  component:EstudianteListComponent
},
{
  path:'matriculaest',
  component: MatriculaEstComponent
}
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
