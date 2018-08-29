import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from '@components/form/form.component';
import { MenuNavComponent } from '@components/menu-nav/menu-nav.component';
import { MainPageComponent } from '@components/main-page/main-page.component';
import { CarsModule } from '@components/car-page/cars.module';
import { DerectiveModule } from '@components/derective-page/derective.module';
import { PipeFilterModule } from './components/pipe-filter-page/pipe-filter.module';

import { AppRouteModule } from './app-route/app-route.module';
import { ShareModulesModule } from '@share/share-modules.module'
import { ShareDirectivesModule } from '@share/share-directives.module';
import { SharePipesModule } from '@share/share-pipes.module';
import { ExtendedPageModule } from '@components/extended-page/extended-page.module';

import { MessageService } from '@services/message.service';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MenuNavComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    CarsModule,
    DerectiveModule,
    PipeFilterModule,
    ShareModulesModule,
    ShareDirectivesModule,
    SharePipesModule,
    ExtendedPageModule,
    AppRouteModule,
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
