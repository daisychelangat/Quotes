import { Component, OnInit, } from '@angular/core';
import {Quote  } from "../quote";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
   new Quote(1,'"Love the life you live, live the life you love."','Bob Marley',new Date(2021,2,1)),
  new Quote(2,'"In whatever you do,do it to your best"','Henry Dru',new Date(2021,1,30)),

];
