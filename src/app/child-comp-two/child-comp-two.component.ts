import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-comp-two',
  templateUrl: './child-comp-two.component.html',
  styleUrls: ['./child-comp-two.component.css']
})
export class ChildCompTwoComponent implements OnInit {
  old: string;
  new: string;

  get content(): string {
    return this.new
  }

  @Input() 
  set content(val: string) {
    this.old = this.content
    this.new = val;
  }

  constructor() { }

  ngOnInit() {
  }

}
