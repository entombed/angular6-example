import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CheckboxModule } from 'primeng/checkbox';
// import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    CheckboxModule,
    // HttpModule
  ],
  declarations: [
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CheckboxModule,
    // HttpModule
  ]
})
export class ShareModulesModule { }
