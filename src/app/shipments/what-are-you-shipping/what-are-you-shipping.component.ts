import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ToggleButton } from '../../shared/toggle-button';

@Component({
  selector: 'app-what-are-you-shipping',
  templateUrl: './what-are-you-shipping.component.html',
  styleUrls: ['./what-are-you-shipping.component.css']
})
export class WhatAreYouShippingComponent implements OnInit, AfterViewInit  {

  constructor() { }
  runningCondition:boolean;

  @ViewChildren(ToggleButton)
  private toggle: QueryList<ToggleButton>;

  ngOnInit() {
  }

  ngAfterViewInit () {
    this.toggle.changes.subscribe(changes => console.log(changes));
  }

  change(data, value){
    value = data;
  }

}
