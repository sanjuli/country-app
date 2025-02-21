import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search-box',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';
  @Output() onValue = new EventEmitter<string>();

  emitirValor(value: string) {
    // Extrae el valor
    this.onValue.emit(value);
  }
}
