import { Component, OnInit } from '@angular/core';
import  {TaskDataService} from '../services/task-data.service';
import { Task } from '../models/task';
import { store } from '@angular/core/src/render3';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  task:Task;
  constructor(private taskDataService:TaskDataService) { }



  ngOnInit() {
    this.task={title:'',description: '', priority:false}
    console.log('se inicializa el objeto task');
    console.log(this.task);

  }

  add(): void{
    this.taskDataService.add(this.task);
    console.log('se agrega tarea');
    
    alert('se agrego una nueva tarea')
  }

}
