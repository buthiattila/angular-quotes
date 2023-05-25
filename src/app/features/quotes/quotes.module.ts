import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {MaterialModule} from "src/app/utils/material.module";

import {QuotesComponent} from "./quotes/quotes.component";
import {QuoteComponent} from "./quote/quote.component";
import {DailyQuoteComponent} from './daily-quote/daily-quote.component';

export const routes = [
  {path: '', component: QuotesComponent},
  {path: 'dailyQuote', component: DailyQuoteComponent},
  {path: 'quote/:id', component: QuoteComponent},
];

@NgModule({
  declarations: [
    QuotesComponent,
    QuoteComponent,
    DailyQuoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class QuotesModule {
}
