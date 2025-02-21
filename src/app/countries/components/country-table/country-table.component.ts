import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-table',
  imports: [CommonModule, RouterLink],
  templateUrl: './country-table.component.html',
  styles: [
    `
      img {
        width: 35px;
      }
    `,
  ],
})
export class CountryTableComponent {
  @Input()
  public countries: Country[] = [];
}
