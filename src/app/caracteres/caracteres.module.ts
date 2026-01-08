import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CaracteresPage } from './caracteres.page';

import { CaracteresPageRoutingModule } from './caracteres-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CaracteresPageRoutingModule
  ],
  declarations: [CaracteresPage]
})
export class CaracteresPageModule { }
