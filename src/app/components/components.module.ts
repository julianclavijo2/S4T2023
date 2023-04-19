import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from "@angular/forms";
import { StepOneComponent } from './form/step-one/step-one.component';
import { StepTwoComponent } from './form/step-two/step-two.component';
import { StepThreeComponent } from './form/step-three/step-three.component';



@NgModule({
  declarations: [
    FormComponent,
    NavComponent,
    FooterComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    FormComponent,
    NavComponent,
    FooterComponent

  ]
})
export class ComponentsModule { }
