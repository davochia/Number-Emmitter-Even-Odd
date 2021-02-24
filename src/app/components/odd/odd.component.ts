import { Component, Input, OnInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnInit {

  //@Input() oddNum: {type: string, value: number};
  @Input() oddNum: number;

  //@ContentChild('contenParagraph', {static: false}) paragraph: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

}
