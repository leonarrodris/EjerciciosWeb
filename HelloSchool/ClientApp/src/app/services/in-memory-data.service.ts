import { Injectable } from '@angular/core';
import {Estudiante} from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  createDb()
  {
    const Estudiante=[
      {
        id: 2,
        Nombre: "Ar",
        Identificacion: "R",
        Direccion: "C",
        Telefono: "311",
        Correo: "Alejandra@Corres",
        RH: "A",
        Alergia: "No Alergias"
    },

    {
      id: 1,
      Nombre: "Arturo Rosado",
      Identificacion: "123123",
      Direccion: "Calle 2",
      Telefono: "31145324",
      Correo: "Arturi@Corres",
      RH: "A-",
      Alergia: "No Alergias"
  }
    ];
    return {Estudiante};
  }

  genId(estudiantes: Estudiante[]): number {
    return estudiantes.length > 0 ? Math.max(...estudiantes.map(estudiante => estudiante.id)) + 1 : 11;

  }
}
