import { Component, OnInit } from '@angular/core';
import { GetTotalBalanceService } from 'src/services/get-total-balance.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  balance:number=0;
  income:number=0;
  expense:number=0;
  constructor(private getBalanceService:GetTotalBalanceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData():void{
    this.balance=this.getBalanceService.balance;

  }

}
