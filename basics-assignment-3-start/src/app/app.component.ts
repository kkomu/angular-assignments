import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showSecret = true;
  timestamps = [];

  onClick() {
    this.showSecret = !this.showSecret;
    this.timestamps.push(Date.now());
  }

  isHighlighted(timestamp: string) {
    return this.timestamps.indexOf(timestamp) >= 4;
  }
}
