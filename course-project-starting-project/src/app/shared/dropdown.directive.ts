import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') click(eventData: Event) {
    this.isOpen = !this.isOpen;
  }

  constructor() {}
}
