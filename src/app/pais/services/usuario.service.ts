import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/response.interface';
import { UsuarioInt, UsuarioPub, UsuarioRegistro, UsuarioActualizacion } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL: string = 'http://localhost:8080/api';
  constructor( private http: HttpClient) { }

  getUsuarioPublico(): Observable<UsuarioPub[]>{
    return this.http.get<UsuarioPub[]>(`${this.baseURL}/getAllUsuarioPub`);
  }

  srchUsuarioPublico(id: number): Observable<UsuarioPub[]> {
    const params = new HttpParams();
    params.set('id', id);
    return this.http.get<UsuarioPub[]>(`${this.baseURL}/getUsuarioPub/${id}`);
  }

  getUsuarioInterno(): Observable<UsuarioInt[]>{
    return this.http.get<UsuarioInt[]>(`${this.baseURL}/getAllUsuarioInt`);
  }

  srchUsuarioInterno(id: number): Observable<UsuarioInt[]> {
    const params = new HttpParams();
    params.set('id', id);
    return this.http.get<UsuarioInt[]>(`${this.baseURL}/getUsuarioInt/${id}`);
  }

  registrarUsuario(usuario: UsuarioRegistro): Observable<Response> {
    return this.http.post<Response>(`${this.baseURL}/registrar`, usuario);
  }

  actualizarUsuario(usuario: UsuarioActualizacion): Observable<Response> {
    return this.http.put<Response>(`${this.baseURL}/actualizar`, usuario);
  }
}