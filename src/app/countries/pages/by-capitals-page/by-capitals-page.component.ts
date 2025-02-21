import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-capitals-page',
  imports: [CommonModule, SearchBoxComponent, CountryTableComponent],
  standalone: true,
  templateUrl: './by-capitals-page.component.html',
  styles: [],
  providers: [CountriesService],
})
export class ByCapitalsPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCapital(term: string): void {
    this.countriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
