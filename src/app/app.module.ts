import {NgModule} from '@angular/core';
import {BrowserModule, Title, Meta} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './utils/material.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./features/header/header.component";
import {HomeComponent} from "./features/home/home.component";
import {DailyQuoteComponent} from "./features/daily-quote/daily-quote.component";
import {QuotesComponent} from "./features/quotes/quotes.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DailyQuoteComponent,
    QuotesComponent,
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
