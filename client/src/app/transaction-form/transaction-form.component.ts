import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { transactions } from 'src/transaction';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm():void{
    this.form=this.fb.group({
      'description':['',Validators.required],
      'amount':[Validators.required]
    });
  }

  addTransaction():void{
    let type;
    if(this.form.get('amount')?.value<0)
        type='expense';
    else
        type='income';

    const newTransaction={
      type:type,
      text:this.form.get('description')?.value,
      amount:this.form.get('amount')?.value
    }
    transactions.push(newTransaction);
    console.log('transactions: ', transactions);
    this.reloadComponent();
  }


  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
  }

}
