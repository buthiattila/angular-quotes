import {NgModule} from '@angular/core';
import {BrowserModule, Title, Meta} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./features/public/header/header.component";

import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './utils/material.module';
import {HomeComponent} from "./features/public/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports: [],
  providers: [
    Title,
    Meta,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
