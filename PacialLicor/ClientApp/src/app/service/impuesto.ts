import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Impuesto} from '../models/impuesto';
const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
providedIn: 'root'
})
export class ImpuestoService {
constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string )
{
}

addImpuesto (impuesto: Impuesto): Observable<Impuesto> {
    return this.http.post<Impuesto>(this.baseUrl+'api/Impuesto', impuesto, httpOptions).pipe(
    tap((newImpuesto: Impuesto) => this.log(`added NewImpuesto w/ id=${newImpuesto.id}`)),
    catchError(this.handleError<Impuesto>('addImpuesto'))
    );
    }

    getAll():Observable<Impuesto[]>
    {/* return this.http.get<Impuesto[]>(this.baseUrl+'api/Impuesto').pipe(
    tap(_=>this.log('Se Consulta la información')),
    catchError(this.handleError<Impuesto[]>('getAll',[]))
    );*/
    let imp=this.http.get<Impuesto[]>(this.baseUrl+'api/Impuesto')
    alert(JSON.stringify(imp));
    return imp;
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
        alert(`ImpuestoService: ${message}`);
        }


}

