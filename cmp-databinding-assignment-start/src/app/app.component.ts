import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    evens: number[] = [];
    odds: number[] = [];

    onIncrement(value: number) {
        value % 2 ? this.odds.push(value) : this.evens.push(value);
    }
}
