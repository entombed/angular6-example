import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from '@components/main-page/main-page.component';
import { FormComponent } from '@components/form/form.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'form', component: FormComponent },
  { path: '**', component: MainPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
})



export class AppRouteModule { }
