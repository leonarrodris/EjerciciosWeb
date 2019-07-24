import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskDataService} from './services/task-data.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TaskDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
