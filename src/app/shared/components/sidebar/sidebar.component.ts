import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule],
  standalone: true,
  templateUrl: './sidebar.component.html',
  styles: ``,
})
export class SidebarComponent {}
