import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mfe2Com1Component } from './mfe2-com1/mfe2-com1.component';
import { Mfe2Com2Component } from './mfe2-com2/mfe2-com2.component';

@NgModule({
  declarations: [AppComponent, Mfe2Com1Component, Mfe2Com2Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class Mfe2Module {}
