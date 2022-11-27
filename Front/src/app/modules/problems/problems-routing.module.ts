import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Problem2Component } from './problem2/problem2.component';
import { Problem4Component } from './problem4/problem4.component';


const routes: Routes = [
  {
    path: 'problem2',
    component: Problem2Component
  },

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
