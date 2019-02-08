import { Cliente } from './../clientes';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { ClientesService } from '../clientes.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title: string;
  clienteForm = this._fb.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });
  idClient: string;

  constructor(
    private _fb: FormBuilder,
    private _clientSrv: ClientesService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cargarCliente();
  }

  create() {
    this._clientSrv.save(this.clienteForm.value).subscribe(data => {
      this._router.navigate(['/clientes']);
      swal.fire('New Client', `Client ${this.clienteForm.value.name} has been created`, 'success');
    });
  }

  cargarCliente(): void {
    this._activatedRoute.params.subscribe(params => {
      this.idClient = params['id'];
      if (this.idClient) {
        this._clientSrv.getCliente(this.idClient).subscribe((cliente: Cliente) => {
          this.clienteForm.patchValue(cliente);
        });
      }
    });
  }

  update() {
    this._clientSrv.update(this.idClient, this.clienteForm.value).subscribe(cliente => {
      this._router.navigate(['clientes']);
      swal.fire('Update Cliente', `Cliente ${cliente.name} has been updated`, 'success');
    });
  }

}
