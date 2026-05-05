import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Convidado {
  id?: number;
  nome: string | null;
  nomeCrianca: string | null;
  convidadoPrincipalId?: number | null;
}

@Injectable({
  providedIn: 'root',
})
export class ConvidadoService {
  private apiUrl = 'https://convite-eme0dsdbe7e9hmfq.canadacentral-01.azurewebsites.net/gerenciadorPresenca';
  // private apiUrl = 'http://localhost:5000/gerenciadorPresenca';

  constructor(private http: HttpClient) {}

  getConvidados(): Observable<Convidado[]> {
    return this.http.get<Convidado[]>(`${this.apiUrl}/consultar`);
  }

  confirmar(convidados: Convidado[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/confirmar`, convidados);
  }
}