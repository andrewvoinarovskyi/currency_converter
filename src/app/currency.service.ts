import { Injectable } from '@angular/core';
import { Currency } from './currency';
import { Rates } from './converter.types';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  transformToRates(currencies: Currency[]): Rates {
    const BASE_CCY = 'UAH'
    const initialRates: Rates = { [BASE_CCY]: 1 };

    const result = currencies.reduce<Rates>((rates, currency) => {
      if (currency.base_ccy === BASE_CCY) {
        rates[currency.ccy] = currency.buy; 
      }
      return rates;
    }, initialRates);

    return result;
  }
}
