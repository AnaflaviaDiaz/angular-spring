import { Cliente } from './../clientes';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

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

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.clienteForm.value);
  }

}
