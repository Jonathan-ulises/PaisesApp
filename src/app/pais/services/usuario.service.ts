import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioInt, UsuarioPub, UsuarioRegistro } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL: string = 'http://localhost:8080/api';
  constructor( private http: HttpClient) { }

  getUsuarioPublico(): Observable<UsuarioPub[]>{
    return this.http.get<UsuarioPub[]>(`${this.baseURL}/getAllUsuarioPub`);
  }

  getUsuarioInterno(): Observable<UsuarioInt[]>{
    return this.http.get<UsuarioInt[]>(`${this.baseURL}/getAllUsuarioInt`);
  }

  registrarUsuario(usuario: UsuarioRegistro): Observable<String> {
    return this.http.post<string>(`${this.baseURL}/registrar`, usuario);
  }
}