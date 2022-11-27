import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Problem4Component } from './problem4/problem4.component';

//Definicion de rutas, para el caso, solo se definio una
const routes: Routes = [
  {
    path: 'problem4',
    component: Problem4Component
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemsRoutingModule { }
