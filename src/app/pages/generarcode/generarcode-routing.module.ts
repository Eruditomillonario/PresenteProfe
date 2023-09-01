import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarcodePage } from './generarcode.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarcodePageRoutingModule {}
