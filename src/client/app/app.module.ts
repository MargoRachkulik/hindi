import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Lesson1Module } from './lesson1/lesson1.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import {Ng2BootstrapModule} from 'ng2-bootstrap/';

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, Lesson1Module, HomeModule, SharedModule.forRoot(),Ng2BootstrapModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
