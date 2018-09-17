import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModulesModule } from '@share/share-modules.module';
import { ShareDirectivesModule } from '@share/share-directives.module';
import { SharePipesModule } from '@share/share-pipes.module';

import { MainComponent } from './main/main.component';
import { Page1Component } from './page1/page1.component';
import {ExAnimationRouteModule} from './ex-animation-route/ex-animation-route.module';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

@NgModule({
  imports: [
    CommonModule,
    ExAnimationRouteModule,
    ShareModulesModule,
    ShareDirectivesModule,
    SharePipesModule
  ],
  declarations: [
    Page1Component,
    MainComponent,
    Page2Component,
    Page3Component
  ]
})
export class ExAnimationModule { }
