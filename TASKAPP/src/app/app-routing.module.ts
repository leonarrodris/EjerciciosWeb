import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskAddComponent} from './task-add/task-add.component';
const routes: Routes=[
  {
    path:'tasklist',
    component:TaskListComponent
  },
  {
    path:'taskadd',
    component:TaskAddComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
