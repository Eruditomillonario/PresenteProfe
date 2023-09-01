import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadoasisPage } from './estadoasis.page';

const routes: Routes = [
  {
    path: '',
    component: EstadoasisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadoasisPageRoutingModule {}
