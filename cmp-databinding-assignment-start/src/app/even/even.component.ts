import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styles: `
    p {
        color: blue;
    }
  `
})
export class EvenComponent {
    @Input() value: number;
}
