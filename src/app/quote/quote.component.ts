import { Component, OnInit,Input } from '@angular/core';
import {Quote  } from "../quote";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
  {id:1,quote:'"Be yourself; everyone else is already taken."',author:'Oscar Wilde'},
];
@Input() quote: Quote;

constructor() { }

ngOnInit() {
}

}
