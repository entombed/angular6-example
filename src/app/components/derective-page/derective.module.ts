import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DerectiveComponent } from './derective/derective.component';
import { DerectiveRouteModule } from './derective-route/derective-route.module';
import { ShareModulesModule } from '@share/share-modules.module';
import { ShareDirectivesModule } from '@share/share-directives.module';

@NgModule({
  imports: [
    CommonModule,
    DerectiveRouteModule,
    ShareModulesModule,
    ShareDirectivesModule
  ],
  declarations: [
    DerectiveComponent,
  ]
})
export class DerectiveModule { }
