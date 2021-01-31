export class Quote {
    id:number;
    quote:string;
    author:string;
    public upvotes : number;
    public downvotes :number;
    constructor(public id:number,public quote:string,public author:string){
      this.upvotes=0;
      this.downvotes=0;
    }
      }