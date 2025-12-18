import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoublePageRoutingModule } from './double-routing.module';

import { DoublePage } from './double.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoublePageRoutingModule
  ],
  declarations: [DoublePage]
})
export class DoublePageModule { }
