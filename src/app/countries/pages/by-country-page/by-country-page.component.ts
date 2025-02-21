import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-by-country-page',
  imports: [CommonModule, SearchBoxComponent, CountryTableComponent],
  standalone: true,
  templateUrl: './by-country-page.component.html',
  styles: ``,
  providers: [CountriesService],
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCountry(term: string): void {
    this.countriesService.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
