import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageAComponent } from '../page-a/page-a.component';
import { PageBComponent } from '../page-b/page-b.component';

const appRoute: Routes = [
  {path: 'page-a', component: PageAComponent },
  {path: 'page-b', component: PageBComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoute)
  ],
  declarations: [],
  exports: [
    RouterModule,
  ]
})
export class ExtendedPageRouteModule { }
