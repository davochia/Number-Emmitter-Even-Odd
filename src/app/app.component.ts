import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //datas = [];

  oddNumbers: number[]=[];
  evenNumbers: number[]=[];

  ngOnInit(){
    //console.log(this.datas)
  }


  // beginGame( num: number ){
  //   console.log(num)
  //   if(num % 2 == 0){
  //     this.datas.push({
  //     type: 'Even',
  //     value: num
  //   })
  //   }else{
  //     this.datas.push({
  //     type: 'Odd',
  //     value: num
  //   })
  //   }
  // }

    beginGame( num: number ){
    console.log(num)
    if(num % 2 == 0){
      this.evenNumbers.push(num)
    }else{
      this.oddNumbers.push(num)
    }
  }


 
}
