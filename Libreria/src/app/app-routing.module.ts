import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistoReservaComponent} from './registo-reserva/registo-reserva.component';
import {ConsultarReservasComponent} from './consultar-reservas/consultar-reservas.component';
const routes: Routes = [
{
  path:'RegistroReservas',
  component:RegistoReservaComponent
},
{
  path:'ConsultarReservas',
  component:ConsultarReservasComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
