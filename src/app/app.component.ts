import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { CurrencyApiService } from './services/currency-api.service';
import { Currency } from './currency';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  currencies = Array<Currency>
  usd_cost = 0;
  eur_cost = 0;

  constructor(private currencyApiService: CurrencyApiService) { }

  ngOnInit(): void {
    this.currencyApiService.getCurrencyData().subscribe({
      next: data => {
        this.currencies = data
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
