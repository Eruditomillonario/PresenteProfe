import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Seccion1PageRoutingModule } from './seccion1-routing.module';

import { Seccion1Page } from './seccion1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Seccion1PageRoutingModule
  ],
  declarations: [Seccion1Page]
})
export class Seccion1PageModule {}
