import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['../form.component.scss']
})
export class StepThreeComponent implements OnInit {

  public showDinamicField: any[] = [];
  public form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      IsFinish: [true],
      NombreEquipo: ['', [Validators.required, Validators.maxLength(100)]],
      TipoColegio: ['', [Validators.required, Validators.maxLength(100)],],
      CantEstudiantes: ['', Validators.required],
      EquipoMixto: ['', Validators.required],
      Integrantes: this.formBuilder.array([

      ])
    })
  }

  get NombreEquipoField() {
    return this.form.get('NombreEquipo');
  }

  get TipoColegioField (){
    return this.form.get('TipoColegio')
  }

  get EquipoMixtoField() {
    return this.form.get('EquipoMixto');
  }

  get CantEstudiantesField() {
    return this.form.get('CantEstudiantes');
  }
  get IntegrantesField() {
    return this.form.get('Integrantes') as FormArray;
  }


  addStudents() {
 
    let arrayIntegrantes = this.form.get('Integrantes') as FormArray;
    arrayIntegrantes.clear();

    for (let i = 1; i <= this.form.get('CantEstudiantes')?.value; i++) {
      
      arrayIntegrantes.push(
        this.formBuilder.group({
          EstudianteGrado: "",
          EstudianteGrupoEtnico: "false",
          GrupoEtnico: ""
        })
      )
    }

  }

  test(){
    this.showDinamicField.push('true');
  }



  save() {

  }

}
