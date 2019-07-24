import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { InMemoryDataService } from '../app/services/in-memory-data.service';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { EstudianteAddComponent } from './estudiante-add/estudiante-add.component';
import { EstudianteListComponent } from './estudiante-list/estudiante-list.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { FormEstudiantesComponent } from './form-estudiantes/form-estudiantes.component';
import { MatriculaEstComponent } from './matricula-est/matricula-est.component'
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    
    FetchDataComponent,
    EstudianteAddComponent,
    EstudianteListComponent,
    FormEstudiantesComponent,
    MatriculaEstComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    //HttpClientInMemoryWebApiModule.forRoot(
      //InMemoryDataService, { dataEncapsulation: false }
    //),
    AppRoutingModule,
   
  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
