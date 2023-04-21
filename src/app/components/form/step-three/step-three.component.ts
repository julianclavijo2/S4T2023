import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { Formulario } from '../../models/formulario.model';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['../form.component.scss', './step-three.component.scss']
})
export class StepThreeComponent implements OnInit {

  public showDinamicField: boolean[] = [];
  public form!: FormGroup;
  @Output() isValid = new EventEmitter<boolean>();
  @Input() sendForm: Formulario | null = null;

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
      CantEstudiantes: ['', Validators.required],
      EquipoMixto: ['false', Validators.required],
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

  get EstudianteGradoField(){
    return this.form.get('EstudianteGrado');
  }


  addStudents() {
 
    let arrayIntegrantes = this.form.get('Integrantes') as FormArray;
    arrayIntegrantes.clear();

    for (let i = 1; i <= this.form.get('CantEstudiantes')?.value; i++) {
      
      arrayIntegrantes.push(
        this.formBuilder.group({
          EstudianteGrado: ['' , Validators.required],
          EstudianteGrupoEtnico: ['false' , [Validators.required]],
        })
      )
    }

  }

  test(){
    console.log(this.form.value);
  }


  pushEtnicoField(i:number){
    this.showDinamicField[i] = true;
   const integrante = this.IntegrantesField.at(i) as FormGroup;
   integrante.setControl('GrupoEtnico' , new FormControl('' , [Validators.required]));
   console.log(this.form.value)
  }

  deleteEtnicoField(i:number){
    const integrante = this.IntegrantesField.at(i) as FormGroup;
    integrante.removeControl('GrupoEtnico');
    console.log(this.form.value);
  }


  save() {
   if (this.sendForm !== null) {
      this.sendForm.Equipo = this.form.value;
      this.isValid.emit(true);
    }
  }

}
