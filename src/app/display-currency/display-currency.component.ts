import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'display-currency',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './display-currency.component.html',
  styleUrl: './display-currency.component.css'
})
export class DisplayCurrencyComponent {
  @Input() currency = '';
  @Input() cost = 0;
}
