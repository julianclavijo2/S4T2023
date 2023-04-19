import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Formulario, FormularioRegistro } from "../../models/formulario.model";

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['../form.component.scss']
})
export class StepOneComponent implements OnInit {

  public form!: FormGroup;



  @Output() isValid = new EventEmitter<boolean>();
  @Input() sendForm: Formulario | null = null;



  constructor(
    private formBuilder: FormBuilder,

  ) {
    this.buildForm();
  }

  ngOnInit() {


  }

  private buildForm() {

    this.form = this.formBuilder.group({
      IsFinish: [true],
      Email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Documento: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10)],],
      NombreCompleto: ['', [Validators.required, Validators.maxLength(40)]],
      Celular: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    })
  }
  //email
  get emailField() {
    return this.form.get('Email');
  }

  //profesor
  get idTeacherField() {
    return this.form.get('Documento');
  }

  //name
  get nameField() {
    return this.form.get('NombreCompleto');
  }

  //phone
  get phoneField() {
    return this.form.get('Celular');
  }

  save() {
    if (this.sendForm !== null) {
      this.sendForm.Profesor = this.form.value;
      this.sendForm.Profesor.Documento = Number(this.form.value.Documento);
      this.sendForm.Profesor.Celular = Number(this.form.value.Celular);
      this.isValid.emit(true);
    }
  }
}
