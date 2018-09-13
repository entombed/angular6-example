import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModulesModule } from '@share/share-modules.module';
import { ShareDirectivesModule } from '@share/share-directives.module';
import { SharePipesModule } from '@share/share-pipes.module';

import { ClientServerComponent } from './client-server/client-server.component';
import { ClientServerRouteModule } from './client-server-route/client-server-route.module';
import { SinglePageComponent } from './single-page/single-page.component';
import { InputCarComponent } from './input-car/input-car.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModulesModule,
    ShareDirectivesModule,
    SharePipesModule,
    ClientServerRouteModule
  ],
  declarations: [
    ClientServerComponent,
    SinglePageComponent,
    InputCarComponent
  ]
})
export class ClientServerModule { }
