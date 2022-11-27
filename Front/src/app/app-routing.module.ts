import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProblemsRoutingModule } from "src/app/modules/problems/problems-routing.module";
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'problems',
    loadChildren: () => import('./modules/problems/problems.module').then(m => m.ProblemsModule)
  },
  {
    path: '**',
    redirectTo: '/problems/problem4'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
