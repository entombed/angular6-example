import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from '@components/form-reactive-page/reactive-form/reactive-form.component';

const appRoutes: Routes = [
  { path: 'reactiveForm', component: ReactiveFormComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class ReactiveFormRouteModule { }
