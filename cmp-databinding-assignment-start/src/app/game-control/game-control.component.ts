import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
    @Output() incremented = new EventEmitter<number>();

    increment = 0;
    intervalId: number;
    
    emitNumber() {
        this.increment += 1;
        this.incremented.emit(this.increment);
    }

    onClickStart() {
        this.intervalId = window.setInterval(this.emitNumber.bind(this), 1000);
    }

    onClickStop() {
        clearInterval(this.intervalId);
    }
}
