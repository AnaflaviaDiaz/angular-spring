import { CLIENTES } from './clientes.json';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './clientes.js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private urlEndPoint = 'http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private _http: HttpClient
  ) { }

  getClientes(): Observable<Cliente[]> {
    // return of (CLIENTES);
    return this._http.get<Cliente[]>(this.urlEndPoint);
    // return this._http.get(this.urlEndPoint)
    // .pipe(map(response => response as Cliente[]));
  }

  save(cliente: Cliente): Observable<Cliente> {
    return this._http.post<Cliente>(this.urlEndPoint, cliente, { headers: this.httpHeaders });
  }

  getCliente(id): Observable<Cliente> {
    return this._http.get<Cliente>(`${this.urlEndPoint}/${id}`);
  }

  update(id: string, cliente: Cliente): Observable<Cliente> {
    return this._http.put<Cliente>(`${this.urlEndPoint}/${id}`, cliente, { headers: this.httpHeaders });
  }

  delete(id: number): Observable<Cliente> {
    return this._http.delete<Cliente>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders });
  }
}
