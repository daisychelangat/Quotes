import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Quote } from "../quote";
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1,'"Love the life you live, live the life you love."','Bob Marley','Daisy',new Date(2021,1,1)),
    new Quote(2,'"In whatever you do,do it to your best"','Henry Dru','Daisy',new Date(2021,1,1)),

  ];

  @Input()  quote: any;
    @Output() toDelete = new EventEmitter<boolean>();

    quoteComplete(complete:boolean){
      this.toDelete.emit(complete);
    }
  constructor() { }

  ngOnInit(): void {this.toDelete
  }

}