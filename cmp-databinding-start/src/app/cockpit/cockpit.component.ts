import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
    @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string}>();
    @Output('bpCreated') blueprintAdded = new EventEmitter<{ blueprintName: string, blueprintContent: string}>();
    //newServerName = '';
    //newServerContent = '';
    @ViewChild('serverContentInput') serverContentInput: ElementRef;
    
    onAddServer(nameInput: HTMLInputElement) {
        this.serverCreated.emit({ serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value });
    }
    
    onAddBlueprint(nameInput: HTMLInputElement) {
        this.blueprintAdded.emit({ blueprintName: nameInput.value, blueprintContent: this.serverContentInput.nativeElement.value });
    }
}
