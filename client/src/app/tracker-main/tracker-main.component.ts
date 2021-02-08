import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/services/http.service';
import { Transaction } from 'src/transaction.interface';


@Component({
  selector: 'app-tracker-main',
  templateUrl: './tracker-main.component.html',
  styleUrls: ['./tracker-main.component.css']
})
export class TrackerMainComponent implements OnInit {

  transactions: Transaction[] = [];
  isEmpty: boolean = false;
  balance: number = 0;
  income: number = 0;
  expense: number = 0;
  data: any;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private httpService: HttpService) { }

  ngOnInit(): void {
    this.getData();
  }

  onTransactionAdded() {
    this.getData()
  }


  getData() {
    this.isLoading = true;
    this.httpService.get().subscribe((data: any) => {
      this.transactions = data.data;

      this.isEmpty = false;
      this.balance = 0;
      this.income = 0;
      this.expense = 0;
      if (this.transactions.length == 0)
        this.isEmpty = true;
      else {
        this.isEmpty = false;
      }

      for (let i = 0; i < this.transactions.length; i++) {
        const transaction = this.transactions[i];
        if (transaction.type== 'expense')
          this.expense = this.expense + Math.abs(transaction.amount);
        if (transaction.type=='income')
          this.income = this.income + Math.abs(transaction.amount);
      }
      this.balance = this.income - this.expense;

      this.isLoading = false;
    })


  }


}
