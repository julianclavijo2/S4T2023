import { Component, OnInit } from '@angular/core';
import { Formulario, FormularioRegistro } from '../models/formulario.model';
import { FormularioService } from "../../service/formulario.service";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  public formSelected:Formulario;

  constructor(
    public modelform:FormularioRegistro,
    public service:FormularioService
  ){
    this.formSelected = modelform.getFormularioBase();
  }

 ngOnInit(): void {
   
 }

 getData(data:boolean) {
    if (data) {
      console.log(this.formSelected);
      let json = {
        jsonRegistro: JSON.stringify(this.formSelected)
      }
/*      this.service.getRegistrosAnteriores(this.formSelected.Profesor.Email , this.formSelected.Profesor.Documento).subscribe(data => {
        console.log(data);
      });  */

      
      this.service.postRegitro(json).subscribe((data:any)=>{
        console.log(data)
        this.formSelected.CodRegistro = data.data;
      }) 

    }

  }
}
