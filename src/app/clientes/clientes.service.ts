import { CLIENTES } from './clientes.json';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './clientes.js';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private urlEndPoint = 'http://localhost:8080/api/clientes';

  constructor(
    private _http: HttpClient
  ) { }

  getClientes(): Observable<Cliente[]> {
    // return of (CLIENTES);
    return this._http.get<Cliente[]>(this.urlEndPoint);
    // return this._http.get(this.urlEndPoint)
    // .pipe(map(response => response as Cliente[]));
  }
}
