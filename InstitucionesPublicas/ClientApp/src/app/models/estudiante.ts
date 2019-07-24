import { Instituciones } from './instituciones';

export class Estudiante {
    Id: number;
    Nombre: string ;
    TipoID: string;
    Grado: string;
    IdInstitucion: number;
    institucion:Instituciones;
}
