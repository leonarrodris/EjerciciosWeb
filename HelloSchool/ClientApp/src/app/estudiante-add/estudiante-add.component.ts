import { Component, OnInit } from '@angular/core';
import {RegistroEstudianteService} from '../services/registro-estudiante.service';
import {Estudiante} from '../models/estudiante';
@Component({
  selector: 'app-estudiante-add',
  templateUrl: './estudiante-add.component.html',
  styleUrls: ['./estudiante-add.component.css']
})
export class EstudianteAddComponent implements OnInit {

  constructor(private registroestudianteservice: RegistroEstudianteService){ }
  estudiante:Estudiante;

  ngOnInit() {
    this.estudiante= {
  id: 0,
  Nombre: '',
  Direccion: '',
  Telefono: '',
  Correo: '',
  RH: '',
  Alergia: ''
  };
  }
  add()
  {
    this.registroestudianteservice.addEstudiante(this.estudiante).subscribe(estudiante => {alert('Se Agrego Una Tarea')});
  }

}
