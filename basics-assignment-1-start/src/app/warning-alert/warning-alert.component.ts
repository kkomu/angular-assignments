import { Component } from '@angular/core';

@Component({
  selector: '.app-warning-alert',
  template: ` <p>warning-alert works!!</p> `,
  styles: [
    `
      p {
        border: 1px solid red;
      }
    `,
  ],
})
export class WarningAlertComponent {}
