import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { ClientServerComponent } from '@components/clent-server-page/client-server/client-server.component';

const appRoutes: Routes = [
  { path: 'clientServer', component: ClientServerComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class ClientServerRouteModule { }
