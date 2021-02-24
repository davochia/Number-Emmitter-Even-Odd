import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  @Output() numbersOut = new EventEmitter<number>();

  //@ViewChild('game') game: ElementRef;

  num: number = 1;
  myChange;

  constructor() {
    //console.log(this.numbersOut)
   }

  ngOnInit(): void {
    //console.log(this.numbersOut)
  }

  onStartGame(){
    this.myChange = setInterval(()=> {
       this.numbersOut.emit(
         this.num++
        )
    }, 1000) 
  }

  onStopGame(){
    clearInterval(this.myChange);
  }

}
