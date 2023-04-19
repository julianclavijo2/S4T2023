import { Component, OnInit } from '@angular/core';
import { Formulario, FormularioRegistro } from '../models/formulario.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  public formSelected:Formulario;

  constructor(
    public modelform:FormularioRegistro
  ){
    this.formSelected = modelform.getFormularioBase();
  }

 ngOnInit(): void {
   
 }

 getData(data:boolean) {
    if (data) {
      console.log(this.formSelected);
    }

  }
}
