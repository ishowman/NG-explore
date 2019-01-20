import { Component, OnInit } from '@angular/core';
import { dataService } from '../dataShare.service'
@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  date: string;

  constructor() { }

  ngOnInit() {
  }

  getTimestamp(){
    this.date = new Date().toLocaleDateString()
    dataService.next(`${Date.now()}`);
  }
}
