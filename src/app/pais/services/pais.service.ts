import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private baseURL: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient) { }

  /*
  La implementacion de consumir servicios de este metodo es para que pueda disparar
  el servicio desde un componente y no desde el mismo service.

  Ya que se tiene el tipado de la respuesta, se deve especificar el tipo de Observavle y el tipo
  que retornara la peticion.
  */
  buscarPais( query: string ): Observable<Country[]> {
    const url = `${this.baseURL}/name/${query}`;

    return this.http.get<Country[]>(url);
  }

  /**
   * Consulta capitales en la API
   * @param query  Termino de consulta
   * @returns Observable de lista de Country
   */
  buscarCapital( query: string ): Observable<Country[]> {
    const url = `${this.baseURL}/capital/${query}`;
    return this.http.get<Country[]>(url);
  }

  /**
   * Consulta la informacion de un pais mediante su codigo.
   * @param id Codigo del pais
   * @returns Observable de un objeto Country
   */
  getPaisPorCodigoAlpha( id: string ): Observable<Country> {
    const url = `${ this.baseURL }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

}
