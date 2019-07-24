import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Estudiante} from '../models/estudiante';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable({
  providedIn: 'root'
})
export class RegistroEstudianteService {

  constructor(private http:HttpClient,@Inject("BASE_URL")private baseUrl:string) { 

    
  }

  addEstudiante (estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(this.baseUrl+'api/estudiante', estudiante, httpOptions).pipe(
    tap((newEstudiante: Estudiante) => this.log(`added NewEstudiante w/ id=${newEstudiante.id}`)),
    catchError(this.handleError<Estudiante>('addEstudiante'))
    );
    }


getAll():Observable<Estudiante[]>
{
return this.http.get<Estudiante[]>(this.baseUrl+'api/estudiante').pipe(
tap(_=>this.log('Se Consulta la información')),
catchError(this.handleError<Estudiante[]>('getAll',[]))
);
}



get(id: number): Observable<Estudiante>
{
const url = `${this.baseUrl + 'api/estudiante'}/${id}`;
return this.http.get<Estudiante>(url).pipe(
tap(_ => this.log(`fetched Estudiante id=${id}`)),
catchError(this.handleError<Estudiante>(`getHero id=${id}`))
);
}

update (estudiante:Estudiante): Observable<any> {
  const url =
  
  `${this.baseUrl + 'api/estudiante'}/${estudiante.id}`;
  return this.http.put(url, estudiante, httpOptions).pipe(
  tap(_ => this.log(`updated estudiante id=${estudiante.id}`)),
  catchError(this.handleError<any>('estudiante'))
  );
  }

  delete (estudiante: Estudiante | number): Observable<Estudiante> {
    const id = typeof estudiante === 'number' ? estudiante : estudiante.id;
    const url =
    
    `${this.baseUrl + 'api/estudiante'}/${id}`;
    
    return this.http.delete<Estudiante>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted estudiante id=${id}`)),
    catchError(this.handleError<Estudiante>('deleteEstudiante'))
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
      alert(`EstudianteService: ${message}`);
      }
}
