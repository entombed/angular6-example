import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipePipe } from '@pipes/filter-pipe.pipe';
import { RoundingPipePipe } from '@pipes/rounding-pipe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FilterPipePipe,
    RoundingPipePipe
  ],
  exports: [
    FilterPipePipe,
    RoundingPipePipe
  ]
})
export class SharePipesModule { }
