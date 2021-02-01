import { Component, OnInit, } from '@angular/core';
import {Quote  } from "../quote";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
  new Quote(1,'"Love the life you live, live the life you love."','Bob Marley','Daisy',new Date(2021,1,1)),
  new Quote(2,'"In whatever you do,do it to your best"','Henry Dru','Daisy',new Date(2021,1,1)),

];

deleteQuote(toDelete:any, index:any){
   if (toDelete) {
     this.quotes.splice(index,1);
   }
 }
 upvote(i:any){
      this.quotes[i].upvotes+=1
  }
downvote(i:any){
    this.quotes[i].downvotes+=1
  }
 originalNum:any
 lastNum:any
 counter:any

 highestUpvote(){
   this.originalNum = 0
   this.lastNum = 0

   for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
     this.lastNum = this.quotes[this.counter].upvotes;
     if(this.lastNum > this.originalNum){this.originalNum = this.lastNum}
   }
   return  this.originalNum
 }
 addNewQuote(quote:any){
   let quoteLength = this.quotes.length;

   quote.completeDate = new Date(quote.completeDate)
   this.quotes.push(quote)
 }

constructor() { }

ngOnInit() {
}

}