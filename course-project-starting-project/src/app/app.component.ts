import { Component } from '@angular/core';
import { MenuOption } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedMenuOption: MenuOption = MenuOption.Recipe;

  onMenuOptionSelected(option: MenuOption) {
    this.selectedMenuOption = option;
  }
}
