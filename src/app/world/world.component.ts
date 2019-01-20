import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { dataService } from '../dataShare.service'

@Component({
  selector: 'world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  timestamp: number;
  constructor() { }

  ngOnInit() {
    this.getTimestamp()
  }

  getTimestamp() {
    this.subscription = dataService.subscribe( (data:any) :void => {
      this.timestamp = data;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
