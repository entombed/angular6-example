import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarItemComponent } from './car-item/car-item.component';
import { CarInputComponent } from './car-input/car-input.component';
import { CarsComponent } from './cars/cars.component';
import { CarRouteModule } from './car-route/car-route.module';
import { ShareModulesModule } from '@share/share-modules.module';
import { ShareDirectivesModule } from '@share/share-directives.module';

@NgModule({
  imports: [
    CommonModule,
    CarRouteModule,
    ShareModulesModule,
    ShareDirectivesModule
  ],
  declarations: [
    CarItemComponent,
    CarInputComponent,
    CarsComponent,
  ]
})
export class CarsModule { }
