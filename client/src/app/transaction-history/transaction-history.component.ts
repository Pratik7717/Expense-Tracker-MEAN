import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import { Transaction } from 'src/transaction.interface';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  @Input() transactions: Transaction[] = [];
  @Output() transactionDeletedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
  }


  deleteTransaction(transactionId:string):void {
    const reqBody = {
      "id": transactionId
    };
    console.log('transactionId',transactionId);
    this.httpService.delete(transactionId).subscribe((response:any) => {
      this.transactionDeletedEvent.emit(true);
    });
  }

}
