import {Component, inject} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';

import {Quote} from "../../core/types/quote.type";
import {QuotesService} from "../../core/services/quotes.service";

@Component({
  selector: 'app-daily-quote',
  templateUrl: './daily-quote.component.html',
  styleUrls: ['./daily-quote.component.scss']
})
export class DailyQuoteComponent {

  private quotesService = inject(QuotesService);

  private unsubscribe = new Subject<void>();
  quote: Quote = {
    id: 0,
    quote: '',
    author: ''
  };

  ngOnInit(): void {
    this.quotesService.getRandomQuote().pipe(takeUntil(this.unsubscribe)).subscribe((response: Quote) => {
      this.quote = response;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
