import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemsRoutingModule } from './problems-routing.module';

import { Problem4Component } from './problem4/problem4.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Problem4Component,
  ],
  imports: [

    CommonModule,
    ProblemsRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class ProblemsModule { }
