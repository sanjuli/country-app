import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { CountryTableComponent } from './countries/components/country-table/country-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, SidebarComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Country-App';
}
