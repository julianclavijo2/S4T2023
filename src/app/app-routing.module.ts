import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { LayoutComponent } from "./pages/layout/layout.component";
import { TermsComponent } from './pages/terms/terms.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'  
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'terms',
        component:TermsComponent
      }
      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
