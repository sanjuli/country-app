import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/countries';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1/';

  constructor(private httpClient: HttpClient) {}

  searchCountryByAlphaCode(term: string): Observable<Country | null> {
    const url = `${this.apiUrl}alpha/${term}`;
    return this.httpClient.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((error) => of(null))
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}capital/${term}`;
    return this.httpClient
      .get<Country[]>(url)
      .pipe(catchError((error) => of([])));
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}name/${term}`;
    return this.httpClient
      .get<Country[]>(url)
      .pipe(catchError((error) => of([])));
  }
  searchRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}region/${term}`;
    return this.httpClient
      .get<Country[]>(url)
      .pipe(catchError((error) => of([])));
  }
}
