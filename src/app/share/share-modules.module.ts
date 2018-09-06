import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
  ],
  exports: [
    // ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ]
})
export class ShareModulesModule { }
