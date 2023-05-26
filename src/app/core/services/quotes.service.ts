import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {HttpService} from 'src/app/core/services/http.service';
import {Quote, Quotes} from "../types/quote.type";

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private httpService = inject(HttpService);

  getAllQuotes(): Observable<Quotes> {
    return this.httpService.getRequest(environment.api.quotes);
  }

  getRandomQuote(): Observable<Quote> {
    return this.httpService.getRequest(environment.api.quote_random);
  }

}
