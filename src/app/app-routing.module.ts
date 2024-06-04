import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mfe2Com1Component } from './mfe2-com1/mfe2-com1.component';
import { Mfe2Com2Component } from './mfe2-com2/mfe2-com2.component';

const routes: Routes = [
  {
    path: 'mfe2-com1',
    component: Mfe2Com1Component,
  },
  {
    path: 'mfe2-com2',
    component: Mfe2Com2Component,
  },
  {
    path: '**',
    redirectTo: 'mfe2-com1',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
