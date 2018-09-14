import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../main/main.component';
import {Page1Component} from '../page1/page1.component';
import {Page2Component} from '../page2/page2.component';


const appRoute: Routes = [
  {path: '', component: MainComponent,
    children: [
      {path: 'page1', component: Page1Component},
      {path: 'page2', component: Page2Component}
    ]
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoute)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class ExAnimationRouteModule { }
