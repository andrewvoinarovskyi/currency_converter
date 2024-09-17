import { Component } from '@angular/core';
import { DisplayCurrencyComponent } from '../display-currency/display-currency.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DisplayCurrencyComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  euro = 43.5433;
  dollar = 41.7689;
}
