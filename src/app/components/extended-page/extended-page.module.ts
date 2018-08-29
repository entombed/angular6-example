import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModulesModule } from '@share/share-modules.module';
import { ShareDirectivesModule } from '@share/share-directives.module';
import { ExtendedPageRouteModule } from './extended-page-route/extended-page-route.module';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';
import { PageBaseComponent } from './page-base/page-base.component'

@NgModule({
  imports: [
    CommonModule,
    ShareModulesModule,
    ShareDirectivesModule,
    ExtendedPageRouteModule,
  ],
  declarations: [
    PageAComponent,
    PageBComponent,
    PageBaseComponent
  ],
})
export class ExtendedPageModule { }
