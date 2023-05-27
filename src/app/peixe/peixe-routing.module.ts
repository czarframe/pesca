import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeixePage } from './peixe.page';

const routes: Routes = [
  {
    path: '',
    component: PeixePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeixePageRoutingModule {}
