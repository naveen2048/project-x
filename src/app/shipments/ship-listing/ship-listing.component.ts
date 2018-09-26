import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ship-listing',
  templateUrl: './ship-listing.component.html',
  styleUrls: ['./ship-listing.component.css']
})
export class ShipListingComponent implements OnInit {
  isCompleted:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  
  tabChange(event:any) {
    console.log(event);
  }

}
