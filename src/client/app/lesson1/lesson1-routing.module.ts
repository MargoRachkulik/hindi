import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lesson1Component } from './lesson1.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'lesson1', component: Lesson1Component }
    ])
  ],
  exports: [RouterModule]
})
export class Lesson1RoutingModule { }
