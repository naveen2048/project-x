import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ToggleButton } from '../../shared/toggle-button';
import { Router } from '@angular/router';
import { Globals } from '../../shared/global-variables';

@Component({
  selector: 'app-what-are-you-shipping',
  templateUrl: './what-are-you-shipping.component.html',
  styleUrls: ['./what-are-you-shipping.component.css']
})
export class WhatAreYouShippingComponent implements OnInit, AfterViewInit  {

  cityorzip:string = "city or zip";
  
  constructor(private router: Router, private global:Globals) { }
  Options: any = {
    runningCondition : false,
    openTop:true,
    customized:false
  }
  

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

  Proceed(){
    this.router.navigateByUrl(this.global.Urls.PRICING_SUGGEST);
  }

}
