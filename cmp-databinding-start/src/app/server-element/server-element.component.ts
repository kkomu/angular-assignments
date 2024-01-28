import { OnInit, OnChanges, Component, Input, SimpleChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input('srvElement') element2: { type: string, name: string, content: string };
    @Input() name: string;
    @ViewChild('heading', { static: true }) header: ElementRef;
    @ContentChild('contentParagraph') paragraph: ElementRef;

    constructor() {
        console.log("Constructor");
    }
    ngOnDestroy(): void {
        console.log("ngOnDestroy");
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log("ngOnChanges", changes);
    }

    ngOnInit() {
        console.log("ngOnInit");
        console.log("Text content: ", this.header.nativeElement.textContent);
        console.log("Paragraph content: ", this.paragraph?.nativeElement.textContent);
    }

    ngDoCheck(): void {
        console.log("ngDoCheck");
    }

    ngAfterContentInit(): void {
        console.log("ngAfterContentInit");
        console.log("Paragraph content: ", this.paragraph.nativeElement.textContent);
    }

    ngAfterContentChecked(): void {
        console.log("ngAfterContentChecked");
    }

    ngAfterViewInit(): void {
        console.log("ngAfterViewInit");
        console.log("Text content: ", this.header.nativeElement.textContent);
    }
    ngAfterViewChecked(): void {
        console.log("ngAfterViewChecked");
    }
}
