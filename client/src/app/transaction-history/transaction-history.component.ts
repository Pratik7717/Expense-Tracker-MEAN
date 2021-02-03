import { Component, OnInit } from '@angular/core';
import { transactionStructure } from 'src/transactionAbstract';
import {transactions} from '../../transaction';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  transactions:transactionStructure[]=[] ;
  isEmpty:boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.getdata();
    console.log('history componenet init..');
  }

  getdata():void{
    this.transactions=transactions;
    if(this.transactions.length==0)
      this.isEmpty=true;
  }


}
