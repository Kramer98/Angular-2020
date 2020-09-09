import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() element: { type: string, name: string, content: string };
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;
  constructor() {
    console.log('constructor called')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called')
    console.log('Text content of paragraph ' + this.paragraph.nativeElement.textContent)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called') // called everytime Angular checks for any change
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called')
    console.log('Text content of paragraph ' + this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContenTChecked init called')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked init called')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called')
  }

}
