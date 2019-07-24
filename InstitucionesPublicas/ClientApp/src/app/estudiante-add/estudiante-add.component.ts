import { Component, OnInit } from '@angular/core';
import {Estudiante} from '../models//estudiante'
import {EstudiantesService} from '../services/estudiantes.service'
import {Instituciones} from '../models/instituciones'
@Component({
  selector: 'app-estudiante-add',
  templateUrl: './estudiante-add.component.html',
  styleUrls: ['./estudiante-add.component.css']
})
export class EstudianteAddComponent implements OnInit {

  constructor(private estudiantesService:EstudiantesService) {
    
   }
   instituciones:Instituciones;
   estudiante: Estudiante;

  ngOnInit() {
    this.estudiante={Id:0,Nombre:'',TipoID:'',Grado:'',IdInstitucion:0, institucion:null }
  }

  add() {
    this.estudiantesService.addEstudiante(this.estudiante).subscribe(estudiante => alert('Se agrego una nueva tarea') );
    }
}
