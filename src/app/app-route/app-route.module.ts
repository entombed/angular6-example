import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { MainPageComponent } from '@components/main-page/main-page.component';
import { FormComponent } from '@components/form/form.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'clientServer', loadChildren: '@components/clent-server-page/client-server.module#ClientServerModule'},
  { path: 'anima-main', loadChildren: '@components/ex-animation-page/ex-animation.module#ExAnimationModule'},
  { path: 'form', component: FormComponent },
  // { path: '**', component: MainPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
    })
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
})



export class AppRouteModule { }
