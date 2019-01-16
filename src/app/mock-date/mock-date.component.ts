import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mock-date',
  templateUrl: './mock-date.component.html',
  styleUrls: ['./mock-date.component.css']
})
export class MockDateComponent implements OnInit {
  date: number;
  showSpinner: boolean;
  constructor() { }

  ngOnInit() {
  }
  initDate() {
    this.date = new Date().getTime()
  }

}
