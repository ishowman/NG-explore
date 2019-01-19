import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-comp-one',
  templateUrl: './child-comp-one.component.html',
  styleUrls: ['./child-comp-one.component.css']
})
export class ChildCompOneComponent implements OnInit, OnChanges {
  old: string;
  new: string;

  get content(): string {
    console.log('get')
    return this.new
  }

  @Input() 
  set content(val: string) {
    console.log('set')
    this.old = this.content + 'hah'
    this.new = val  + 'hah';
  }

  // @Input() 
  //   content: string
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges({content}: SimpleChanges) {
    console.log(content.previousValue, content.currentValue )
    // if( content && content.currentValue ) {
      this.old = content.previousValue
      this.new = content.currentValue  
    // }
  }

}
