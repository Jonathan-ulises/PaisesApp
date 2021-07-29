import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private baseURL: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient) { }

  /*
  La implementacion de consumir servicios de este metodo es para que pueda disparar
  el servicio desde un componente y no desde el mismo service.
  */
  buscarPais( query: string ): Observable<any> {
    const url = `${this.baseURL}/name/${query}`;

    return this.http.get(url);
  }


}
