import { Component, OnInit } from '@angular/core';
import { Currency, ExchangeResponse, ExhangeService } from '../exhange.service';

@Component({
  selector: 'app-exchange-list',
  templateUrl: './exchange-list.component.html',
  styleUrl: './exchange-list.component.css'
})
export class ExchangeListComponent implements OnInit {

  currencies: Currency[] = [];

  constructor(private exchangeService: ExhangeService) { }

  ngOnInit(): void {
    this.exchangeService.getExchangeData().subscribe((data: ExchangeResponse) => {
      this.currencies = data.currencies;
    });
  }

}
