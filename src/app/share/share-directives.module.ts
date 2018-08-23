import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BgcRedDirective } from '@directives/bgc-red.directive';
import { AutoFocusDirective } from '@directives/auto-focus.directive';
import { MouseActionDirective } from '@directives/mouse-action.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BgcRedDirective,
    AutoFocusDirective,
    MouseActionDirective
  ],
  exports: [
    BgcRedDirective,
    AutoFocusDirective,
    MouseActionDirective
  ]
})
export class ShareDirectivesModule { }
