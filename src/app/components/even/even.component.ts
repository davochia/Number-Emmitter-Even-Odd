import { Component, ContentChild, Input, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss']
})
export class EvenComponent implements OnInit {

 // @Input() evenNum: {type: string, value: number};
  @Input() evenNum:  number;

 // @ContentChild('contenParagraph', {static: false}) paragraph: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }
}
