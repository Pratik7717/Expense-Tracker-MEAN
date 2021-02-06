import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker-info',
  templateUrl: './tracker-info.component.html',
  styleUrls: ['./tracker-info.component.css']
})
export class TrackerInfoComponent implements OnInit {

  @Input() balance = 0;
  @Input() income = 0;
  @Input() expense = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
