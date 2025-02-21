import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-region-page',
  imports: [CommonModule, SearchBoxComponent, CountryTableComponent],
  standalone: true,
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByRegion(term: string): void {
    this.countriesService.searchRegion(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
