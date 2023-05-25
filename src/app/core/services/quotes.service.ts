import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {HttpService} from 'src/app/core/services/http.service';
import {Quote, Quotes} from "../types/quote.type";

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private httpService = inject(HttpService);

  private quotes = new BehaviorSubject<Quote[] | null>(null);
  quotes$ = this.quotes.asObservable();

  getAllQuotes(): void {
    this.httpService.getRequest(environment.api.quotes).subscribe((response: Quotes) => {
      this.quotes.next(response.quotes);
    });
  }

  getRandomQuote(): Observable<Quote> {
    return this.httpService.getRequest(environment.api.quote_random);
  }

}
