import {Component, inject} from '@angular/core';
import {BehaviorSubject, Subject, takeUntil} from 'rxjs';

import {Quote, Quotes} from "../../core/types/quote.type";
import {QuotesService} from "../../core/services/quotes.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent {

  private quotesService = inject(QuotesService);

  private unsubscribe = new Subject<void>();

  quotes = new BehaviorSubject<Quote[] | null>(null);
  quotes$ = this.quotes.asObservable();

  ngOnInit(): void {
    this.quotesService.getAllQuotes().subscribe((response: Quotes) => {
      this.quotes.next(response.quotes);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
