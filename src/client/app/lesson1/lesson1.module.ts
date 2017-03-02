import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lesson1Component } from './lesson1.component';
import { Lesson1RoutingModule } from './lesson1-routing.module';
import { TabsModule } from 'ng2-bootstrap';

@NgModule({
  imports: [CommonModule, Lesson1RoutingModule,TabsModule.forRoot()],
  declarations: [Lesson1Component],
  exports: [Lesson1Component]
})
export class Lesson1Module { }
