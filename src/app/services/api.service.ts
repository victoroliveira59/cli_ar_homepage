import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api-email-k0qk.onrender.com/api/contato'; // Altere para a URL da sua API

  constructor(private http: HttpClient) { }

  enviarFormulario(dados: any): Observable<any> {
    return this.http.post(this.apiUrl, dados);
  }
}
