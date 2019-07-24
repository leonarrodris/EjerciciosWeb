import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Estudiante} from '../models/estudiante';
const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string)
  {
    
  }

  addEstudiante (estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(this.baseUrl+'api/Institucion', estudiante, httpOptions).pipe(
    tap((newEstudiante: Estudiante) => this.log(`added NewEstudiante w/ id=${newEstudiante.Id}`)),
    catchError(this.handleError<Estudiante>('addEstudiantes'))
    );
  }

  getAll():Observable<Estudiante[]>
{
return this.http.get<Estudiante[]>(this.baseUrl+'api/Institucion').pipe(
tap(_=>this.log('Se Consulta la información')),
catchError(this.handleError<Estudiante[]>('getAll',[]))
);
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
  console.error(error);
  this.log(`${operation} failed: ${error.message}`);
  return of(result as T);
  };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  alert(`Estudiante: ${message}`);
  }
}
