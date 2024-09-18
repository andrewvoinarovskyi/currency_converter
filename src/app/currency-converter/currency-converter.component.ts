import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ccy, Rates } from '../converter.types';
import { DecimalPipe, KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [FormsModule, KeyValuePipe, DecimalPipe],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css'
})
export class CurrencyConverterComponent {
  @Input() rates: Rates = {
    'UAH': 1,
    'USD': 0,
    'EUR': 0,
  };

  amount1: number | undefined;
  currency1: Ccy = 'UAH';
  amount2: number | undefined;
  currency2: Ccy = 'USD';

  updateSecondAmount(): void {
    if (typeof(this.amount1) === 'undefined') return;
    const source = this.rates[this.currency1] ?? 0;
    const target = this.rates[this.currency2] ?? 1;
    const rate = source / target;
    this.amount2 = parseFloat((this.amount1 * rate).toFixed(2));
  }

  updateFirstAmount(): void {
    if (typeof(this.amount2) === 'undefined') return;
    const source = this.rates[this.currency2] ?? 0;
    const target = this.rates[this.currency1] ?? 1;
    const rate = source / target;
    this.amount1 = parseFloat((this.amount2 * rate).toFixed(2));
  }

  onFirstAmountChange(): void {
    this.updateSecondAmount();
  }

  onFirstCurrencyChange(): void {
    this.updateSecondAmount();
  }

  onSecondAmountChange(): void {
    this.updateFirstAmount();
  }

  onSecondCurrencyChange(): void {
    this.updateSecondAmount();
  }
}
