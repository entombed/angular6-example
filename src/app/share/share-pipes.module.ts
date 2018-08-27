import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipePipe } from '@pipes/filter-pipe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FilterPipePipe,
  ],
  exports: [
    FilterPipePipe,
  ]
})
export class SharePipesModule { }
