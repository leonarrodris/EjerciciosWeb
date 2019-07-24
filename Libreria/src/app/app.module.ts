import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './servicio/in-memory-data.service';
import {ReservaAddService} from './servicio/reserva-add.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistoReservaComponent } from './registo-reserva/registo-reserva.component';
import { ConsultarReservasComponent } from './consultar-reservas/consultar-reservas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegistoReservaComponent,
    ConsultarReservasComponent,
    HttpClientModule
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [ReservaAddService],
  bootstrap: [AppComponent]
})
export class AppModule { }
