import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { Formulario } from '../../models/formulario.model';

@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrls: ['./step-five.component.scss']
})
export class StepFiveComponent implements OnInit {
  public showYears: boolean = false;
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
      ParticipacionAnterior: ['false'],
      AnnoParticipacionAnterior:'2014 , 2016',
      AceptoTerminos: [1, Validators.required],
      AutorizoDatos: [1, Validators.required],
    })
  }

  get ParticipacionAnteriorField() {
    return this.form.get('ParticipacionAnterior');
  }

  get AnnoParticipacionAnteriorField(){
    return this.form.get('AnnoParticipacionAnterior');
  }

  pushYear() {
    let a = this.form as FormGroup
    a.setControl('AnnoParticipacionAnterior' , new FormControl('' , [Validators.required]));
    this.showYears = true;
    console.log(this.form.value);
  }

  deleteYear() {
    this.showYears = false;
    this.form.removeControl('AnnoParticipacionAnterior');
    console.log(this.form.value);
  }

  getOptions(){
    let yearsArray = this.AnnoParticipacionAnteriorField?.value;
    console.log(yearsArray);

     
    

  } 

  save() {
    if (this.sendForm !== null) {
      this.sendForm.Concurso = this.form.value;
      this.isValid.emit(true);
    }
  }

}
