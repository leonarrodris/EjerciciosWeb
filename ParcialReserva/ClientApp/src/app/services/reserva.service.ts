import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Reserva} from '../models/reserva';
const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string) { }
  addReserva (reserva: Reserva): Observable<Reserva>{
    return this.http.post<Reserva>(this.baseUrl+'api/Reserva', reserva, httpOptions).pipe(tap((newReserva: Reserva)=> this.log(`added NewReserva w/ Identificacion= ${newReserva.Identificacion}`)),catchError(this.handleError<Reserva>('addReserva'))
    );
    }
    getAll():Observable<Reserva[]>
    {
    return this.http.get<Reserva[]>(this.baseUrl+'api/Reserva').pipe(
    tap(_=>this.log('Se Consulta la información')),
    catchError(this.handleError<Reserva[]>('getAll',[]))
    );

    
    }

    get(Id: string): Observable<Reserva>
{
    const url = `${this.baseUrl + 'api/Reserva'}/${Id}`;
    return this.http.get<Reserva>(url).pipe(
    tap(_ => this.log(`fetched task id=${Id}`)),
    catchError(this.handleError<Reserva>(`getHero id=${Id}`))
);
}
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
  console.error(error);
  this.log(`${operation} failed: ${error.message}`);
  return of(result as T);
  };
  }

  private log(message: string) {
    alert(`TaskService: ${message}`);
    }
}

