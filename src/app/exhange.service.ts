import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExhangeService {

  private apiUrl = 'https://localhost:7076/api/exchangerates/get';

  constructor(private httpClient: HttpClient) { }


  getExchangeData() : Observable<ExchangeResponse> {
    return this.httpClient.get<ExchangeResponse>(this.apiUrl);
  }
}


export interface ExchangeResponse {
  currencies: Currency[];
}

export interface Currency {
  code: string;
  currencyName: string;
  forexBuying: number;
  forexSelling: number;
}