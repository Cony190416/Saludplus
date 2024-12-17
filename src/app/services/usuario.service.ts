import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000'; // Asegúrate de que tu servidor esté en este puerto

  constructor(private http: HttpClient) {}

  // Método para registrar el usuario
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registrate`, user); // Corrección aquí usando backticks
  }
}
