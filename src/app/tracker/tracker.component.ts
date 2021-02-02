import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  balance:number=0;
  income:number=0;
  expense:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
