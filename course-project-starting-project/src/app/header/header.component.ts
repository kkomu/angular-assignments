import { Component, EventEmitter, Output } from '@angular/core';

export enum MenuOption {
  Recipe = 'Recipe',
  ShoppingList = 'ShoppingList',
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() menuOptionSelected = new EventEmitter<MenuOption>();

  onSelect(option: string) {
    this.menuOptionSelected.emit(option as MenuOption);
  }
}
