import { ClientesService } from './clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(
    private _clientesSrv: ClientesService
  ) { }

  ngOnInit() {
    this._clientesSrv
    .getClientes()
    .subscribe(clientes => this.clientes = clientes);
  }

}
