import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeFilterComponent } from './pipe-filter/pipe-filter.component';
import { PipeFilterRouteModule } from './pipe-filter-route/pipe-filter-route.module';
import { ShareModulesModule } from '@share/share-modules.module';
import { ShareDirectivesModule } from '@share/share-directives.module';
import { SharePipesModule } from '@share/share-pipes.module';

@NgModule({
  imports: [
    CommonModule,
    PipeFilterRouteModule,
    ShareModulesModule,
    ShareDirectivesModule,
    SharePipesModule
  ],
  declarations: [
    PipeFilterComponent
  ]
})
export class PipeFilterModule { }
