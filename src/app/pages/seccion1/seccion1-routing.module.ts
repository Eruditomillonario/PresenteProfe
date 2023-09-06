import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Seccion1Page } from './seccion1.page';

const routes: Routes = [
  {
    path: '',
    component: Seccion1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Seccion1PageRoutingModule {}
