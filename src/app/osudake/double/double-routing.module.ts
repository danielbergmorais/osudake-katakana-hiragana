import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoublePage } from './double.page';

const routes: Routes = [
  {
    path: '',
    component: DoublePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoublePageRoutingModule {}
