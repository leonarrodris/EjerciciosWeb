import { Component, OnInit } from '@angular/core';
import {EstudiantesService} from '../services/estudiantes.service'
import {Estudiante} from '../models/estudiante'
@Component({
  selector: 'app-estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.css']
})
export class EstudianteListComponent implements OnInit {
estudiantes: Estudiante[];
  constructor(private estudiantesService: EstudiantesService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll()
  {
    
    this.estudiantesService.getAll().subscribe(estudiantes =>this.estudiantes=estudiantes)
  }

}
