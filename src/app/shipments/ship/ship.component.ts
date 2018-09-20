import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {
  type:string;

  constructor(private route:ActivatedRoute) { 
    this.type = this.route.snapshot.params.d;
  }

  ngOnInit() {
  }

}
