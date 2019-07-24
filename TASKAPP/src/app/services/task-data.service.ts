import { Injectable } from '@angular/core';
import { Task } from '../models/task'
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor() { }

  add(task:Task) {
  //console.log(JSON.stringify(task));

  let tasks:Task[]=[];

  if(localStorage.getItem('tasks')!=null)
  {
    tasks=JSON.parse(localStorage.getItem('tasks'));
  }
  //console.log(JSON.stringify(tasks));
  tasks.push(task);

  localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  getAll():Task[]
  {
    return JSON.parse(localStorage.getItem('tasks'));
    
  }
}
