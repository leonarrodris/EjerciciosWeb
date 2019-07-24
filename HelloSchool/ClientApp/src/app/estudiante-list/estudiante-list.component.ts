import { Component, OnInit } from '@angular/core';
import {RegistroEstudianteService} from '../services/registro-estudiante.service';
import {Estudiante} from '../models/estudiante';

@Component({
  selector: 'app-estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.css']
})
export class EstudianteListComponent implements OnInit {
estudiantes: Estudiante[];
  constructor(private registroestudianteservice:RegistroEstudianteService) { }

  ngOnInit() {
    this.getAll();
  }
getAll()
{
  this.registroestudianteservice.getAll().subscribe(estudiantes=>this.estudiantes=estudiantes)
}
}
