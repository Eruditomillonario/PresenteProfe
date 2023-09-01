import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadoasisPageRoutingModule } from './estadoasis-routing.module';

import { EstadoasisPage } from './estadoasis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadoasisPageRoutingModule
  ],
  declarations: [EstadoasisPage]
})
export class EstadoasisPageModule {}
