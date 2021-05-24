import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calci',
  templateUrl: './calci.component.html',
  styleUrls: ['./calci.component.css']
})
export class CalciComponent implements OnInit {

  result:number=0;
  n1:number=0;
  n2:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  setN1(n1:string){
      this.n1= parseInt(n1);
  }

  setN2(n2:string){
    this.n2= parseInt(n2);
}
  
  add():number{
    return this.result=this.n1+this.n2;
  }
  
  sub():number{
    return this.result=this.n1-this.n2;
  }

  mul():number{
    return this.result=this.n1*this.n2;
  }
  div():number{
    return this.result=this.n1/this.n2;
  }
}
