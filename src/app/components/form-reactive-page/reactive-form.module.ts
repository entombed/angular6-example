import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModulesModule } from '@share/share-modules.module';
import { ShareDirectivesModule } from '@share/share-directives.module';
import { SharePipesModule } from '@share/share-pipes.module';
// import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormRouteModule } from './reactive-form-route/reactive-form-route.module';


@NgModule({
  imports: [
    CommonModule,
    // ReactiveFormsModule,
    ShareModulesModule,
    ShareDirectivesModule,
    SharePipesModule,
    ReactiveFormRouteModule
  ],
  declarations: [
    ReactiveFormComponent
  ]
})
export class ReactiveFormModule { }
