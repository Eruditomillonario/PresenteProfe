import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodigopassPage } from './codigopass.page';

const routes: Routes = [
  {
    path: '',
    component: CodigopassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodigopassPageRoutingModule {}
