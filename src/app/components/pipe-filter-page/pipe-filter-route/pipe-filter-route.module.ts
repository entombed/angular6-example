import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PipeFilterComponent } from '@components/pipe-filter-page/pipe-filter/pipe-filter.component'

const appRoutes: Routes = [
  { path: 'pipeFilter', component: PipeFilterComponent },
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
export class PipeFilterRouteModule { }
