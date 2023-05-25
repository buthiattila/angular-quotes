import {Component, inject} from '@angular/core';
import {Subject} from 'rxjs';

import {Quote} from "../../core/types/quote.type";
import {QuotesService} from "../../core/services/quotes.service";

@Component({
  selector: 'app-daily-quote',
  templateUrl: './daily-quote.component.html',
  styleUrls: ['./daily-quote.component.scss']
})
export class DailyQuoteComponent {

  private quotesService = inject(QuotesService);

  title = "Napi idézet";

  quote: Quote = {
    id: 0,
    quote: '',
    author: ''
  };
  private unsubscribe = new Subject<void>();

  ngOnInit(): void {
    this.quotesService.getRandomQuote().subscribe((response: Quote) => {
      this.quote = response;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
