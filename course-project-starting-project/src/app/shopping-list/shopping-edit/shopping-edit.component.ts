import {
  Component,
  ElementRef,
  EventEmitter,
  ViewChild,
  Output,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAdd() {
    const name = this.nameRef.nativeElement.value;
    const amount = this.amountRef.nativeElement.value;

    //console.log('onAdd', name, amount);
    this.ingredientAdded.emit(new Ingredient(name, amount));
  }
}
