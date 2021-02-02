import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetTotalBalanceService {
  balance:number=0;
  constructor() { }
}
