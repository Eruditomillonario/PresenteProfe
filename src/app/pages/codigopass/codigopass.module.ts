import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigopassPageRoutingModule } from './codigopass-routing.module';

import { CodigopassPage } from './codigopass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigopassPageRoutingModule
  ],
  declarations: [CodigopassPage]
})
export class CodigopassPageModule {}
