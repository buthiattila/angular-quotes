import {Component, inject} from '@angular/core';
import {Subject} from 'rxjs';

import {Quote, Quotes} from "../../core/types/quote.type";
import {QuotesService} from "../../core/services/quotes.service";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent {

  private quotesService = inject(QuotesService);
  private unsubscribe = new Subject<void>();

  minSearchLength: number = 3;
  searchText: string = '';
  quotes: Quote[] = [];
  filteredQuotes: Quote[] = [];

  ngOnInit(): void {
    this.quotesService.getAllQuotes().subscribe((response: Quotes) => {
      this.quotes = response.quotes;

      this.applyFilter();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  checkInput() {
    this.applyFilter();
  }

  applyFilter() {
    if (this.searchText.length >= this.minSearchLength) {
      this.filteredQuotes = this.quotes.filter(quote =>
        quote.quote.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filteredQuotes = this.quotes;
    }
  }

}
