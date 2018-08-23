import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DerectiveComponent } from '../derective/derective.component';

const appRoutes: Routes = [
  { path: 'derective', component: DerectiveComponent },
]

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
export class DerectiveRouteModule { }
