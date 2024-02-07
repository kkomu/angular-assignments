import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  @Output() countAdded = new EventEmitter();

  count = 0;

  constructor() {}

  addCount() {
    this.count += 1;
    this.countAdded.emit(this.count);
  }
}
