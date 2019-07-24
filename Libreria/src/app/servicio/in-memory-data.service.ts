import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const reservas = [
      { identificacion: 11, nombre: 'Mr. Nice' },
      { identificacion: 12, nombre: 'Narco' },
      { identificacion: 13, name: 'Bombasto' },
      { identificacion: 14, name: 'Celeritas' },
      { identificacion: 15, name: 'Magneta' },
      { identificacion: 16, name: 'RubberMan' },
      { identificacion: 17, name: 'Dynama' },
      { identificacion: 18, name: 'Dr IQ' },
      { identificacion: 188, name: 'Magma' },
      { identificacion: 19, name: 'Magma' },

    ];
    return {reservas};
  }
 
}
