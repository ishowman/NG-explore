import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-mock-timer',
  templateUrl: './mock-timer.component.html',
  styleUrls: ['./mock-timer.component.css']
})
export class MockTimerComponent implements OnInit {
  showSpinner: boolean;
  constructor() { }

  ngOnInit() {
  }
  discardChanges() {
    const source = timer(1000, 2000);
    this.showSpinner = true;
    source.subscribe(() => {
        console.log(1)
        this.showSpinner = false;
    });
  }
}
