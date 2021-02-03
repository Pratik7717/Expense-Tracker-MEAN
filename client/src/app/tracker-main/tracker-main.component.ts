import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';
// import { transactions } from 'src/transaction';
import { transactionStructure } from 'src/transactionAbstract';


@Component({
  selector: 'app-tracker-main',
  templateUrl: './tracker-main.component.html',
  styleUrls: ['./tracker-main.component.css']
})
export class TrackerMainComponent implements OnInit {
  form!: FormGroup;
  transactions:transactionStructure[]=[];
  isEmpty:boolean=false;
  balance:number=0;
  income:number=0;
  expense:number=0;
  data:any;
  isLoading:boolean=false;

  constructor(private fb:FormBuilder,private router:Router,private httpService:HttpService) { }

  ngOnInit(): void {
    console.log('tracker-main init');
    this.middleware();
    this.buildForm();
  }

  buildForm():void{
    this.form=this.fb.group({
      'description':['',Validators.required],
      'amount':[Validators.required]
    });
  }

  async addTransaction(){
    let type=null;
    if(this.form.get('amount')?.value<0)
        type='expense';
    else
        type='income';

    const reqBody={
      "type":type,
      "text": this.form.get('description')?.value,
      "amount": this.form.get('amount')?.value
    }
    this.data= await this.httpService.post(reqBody).toPromise();
    console.log('data returned by post',this.data);
    this.middleware();
    /*
    if(this.form.get('amount')?.value<0)
        this.expense=this.expense+Math.abs(this.form.get('amount')?.value);
    else
        this.income=this.income+Math.abs(this.form.get('amount')?.value);
    this.balance=this.balance+this.form.get('amount')?.value;
    const newTransaction={
      type:type,
      text:this.form.get('description')?.value,
      amount:this.form.get('amount')?.value
    }

    this.transactions.push(newTransaction);
    console.log('transactions: ', this.transactions);
    */

    //this.router.navigate(['/']);
  }

  middleware():void{
    this.isLoading=true;
    setTimeout(() => {
      this.isLoading=false;
     this.getData();
    }, 4000);
  }

  async getData(){
    console.log('getdata method called');

    const data:any=await this.httpService.get().toPromise();
    this.transactions=data.data;
    console.log('length: ',this.transactions.length);
    console.log('1st amt:',this.transactions[0].amount)
    //this.transactions=transactions;
    this.isEmpty=false;
    this.balance=0;
    this.income=0;
    this.expense=0;
    if(this.transactions.length==0)
      this.isEmpty=true;
    else{
      this.isEmpty=false;
    }

    for (let i = 0; i < this.transactions.length; i++) {
      const transaction = this.transactions[i];
      this.balance=this.balance+transaction.amount;
      if(transaction.amount<0)
        this.expense=this.expense+Math.abs(transaction.amount);
      if(transaction.amount>=0)
        this.income=this.income+Math.abs(transaction.amount);
    }

  }


}
