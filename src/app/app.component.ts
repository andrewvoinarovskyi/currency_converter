import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { CurrencyApiService } from './services/currency-api.service';
import { Currency } from './currency';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CurrencyService } from './currency.service';
import { Rates } from './converter.types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CurrencyConverterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  currencies: Currency[] = [];
  rates: Rates = {};
  usd_cost = 0;
  eur_cost = 0;

  constructor(private currencyApiService: CurrencyApiService, private currencyService : CurrencyService) { }

  ngOnInit(): void {
    this.currencyApiService.getCurrencyData().subscribe({
      next: data => {
        this.currencies = data
        this.rates = this.currencyService.transformToRates(data);
        this.eur_cost = data.find((el: Currency) => el.ccy == "EUR").buy
        this.usd_cost = data.find((el: Currency) => el.ccy == "USD").buy

        console.log('JSON Data:', data)
      },
      error: error => {
        console.error('Error fetching JSON data:', error)
      }
    });
  }

  title = 'currency_converter';
}
