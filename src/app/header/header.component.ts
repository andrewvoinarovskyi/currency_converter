import { Component, Input } from '@angular/core';
import { DisplayCurrencyComponent } from '../display-currency/display-currency.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DisplayCurrencyComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() usd = 0;
  @Input() eur = 0;
}
