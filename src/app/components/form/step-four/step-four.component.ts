import { Component, OnInit ,EventEmitter, Input, Output} from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { Formulario } from '../../models/formulario.model';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['../form.component.scss', './step-four.component.scss']
})
export class StepFourComponent implements OnInit {



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
      NombreProyecto: ['', [Validators.required, Validators.maxLength(40)]],
      Tematica: ['', [Validators.required, Validators.maxLength(30)]],
      Empatizar: ['', [Validators.required ,Validators.maxLength(840)]],
      Definir:['', [Validators.required,Validators.maxLength(840)]],
      Idear: ['', [Validators.required ,Validators.maxLength(560)]],
      Prototipar: ['', [Validators.required , ,Validators.maxLength(840)]],
      Validar: ['', [Validators.required ,Validators.maxLength(560)]],
    })
  }

  get NombreProyectoField(){
    return this.form.get('NombreProyecto');
  }

  get TematicaField(){
    return this.form.get('Tematica');
  }

  get EmpatizarField(){
    return this.form.get('Empatizar');
  }

  get DefinirField(){
    return this.form.get('Definir');
  }

  get IdearField(){
    return this.form.get('Idear');
  }

  get PrototiparField(){
    return this.form.get('Prototipar');
  }

  get ValidarField(){
    return this.form.get('Validar');
  }


  save() {
    if (this.sendForm !== null) {
       this.sendForm.Proyecto = this.form.value;
       this.isValid.emit(true);
     }
   }

}
