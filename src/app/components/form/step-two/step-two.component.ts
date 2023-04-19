import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from "@angular/forms";
import { FormularioService } from "../../../service/formulario.service";
import { Departamentos } from '../../models/departamentos.model';
import { Ciudades } from '../../models/ciudades.model';
import { Formulario } from '../../models/formulario.model';


@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['../form.component.scss']
})
export class StepTwoComponent implements OnInit {

  @Output() isValid = new EventEmitter<boolean>();
  @Input() sendForm: Formulario | null = null;


show() {
console.log(this.form.invalid);
}

  public departamentos:Departamentos[] = [];
  public ciudades:Ciudades[]=[];
  public form!: FormGroup;



  constructor(
    private formBuilder: FormBuilder,
    private formService:FormularioService

  ) {
    this.buildForm();
  }

  ngOnInit(): void {

    this.getDeptos();
  }

  getDeptos(){
    this.formService.getDepartamentos().subscribe((data:any)=>{
     this.departamentos = data.data;
    })
  }

  getCityByDepto(){
    console.log(this.form);
    let idDepto = this.form.get('Departamento')?.value;
    this.formService.getCiudades(idDepto).subscribe((data:any)=>{
      this.ciudades = data.data;
    })
    
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      IsFinish:[true],
      NombreColegio: ['', [Validators.required, Validators.maxLength(100)]],
      Direccion: ['' , [Validators.required, Validators.maxLength(100)],],
      Pais: ['Colombia'],
      Departamento: ['' , Validators.required],
      Ciudad: ['' , Validators.required],
    })
  }

  get institutionField(){
    return this.form.get('NombreColegio');
  }

  get direccionField(){
    return this.form.get('Direccion');
  }

  get paidField(){
    return this.form.get('pais');
  }

  get DepartamentoField(){
    return this.form.get('Departamento');
  }

  save() {

    if (this.sendForm !== null) {
      this.sendForm.Colegio = this.form.value;
      this.isValid.emit(true);
    }
    
    }

}
