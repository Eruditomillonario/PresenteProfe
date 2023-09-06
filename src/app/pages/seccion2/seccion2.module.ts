import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Seccion2PageRoutingModule } from './seccion2-routing.module';

import { Seccion2Page } from './seccion2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Seccion2PageRoutingModule
  ],
  declarations: [Seccion2Page]
})
export class Seccion2PageModule {}
