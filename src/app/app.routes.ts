import { Routes } from '@angular/router';

import { routesCountries } from './countries/countries.routes';

export const routes: Routes = [
  {
    path: 'countries',
    children: routesCountries,
  },
  {
    path: '**',
    redirectTo: 'countries',
  },
];
