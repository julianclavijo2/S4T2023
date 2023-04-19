import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from "@angular/forms";

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SectionFormComponent } from './home/sections/section-form/section-form.component';
import { SectionBannerComponent } from './home/sections/section-banner/section-banner.component';
import { TermsComponent } from './terms/terms.component';
import { LayoutComponent } from './layout/layout.component';






@NgModule({
  declarations: [
    HomeComponent,
    SectionFormComponent,
    SectionBannerComponent,
    TermsComponent,
    LayoutComponent,
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class PagesModule { }
