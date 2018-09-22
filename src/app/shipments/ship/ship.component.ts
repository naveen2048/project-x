import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ICategoryType, CategoryTypes } from "../../models/categories.model";

@Component({
  selector: "app-ship",
  templateUrl: "./ship.component.html",
  styleUrls: ["./ship.component.css"]
})
export class ShipComponent implements OnInit {
  type: string;
  data: ICategoryType[] = CategoryTypes;

  constructor(private route: ActivatedRoute) {
    this.data = this.data.filter(p => p.Category === this.route.snapshot.params.d); //this.route.snapshot.params.d;
  }

  ngOnInit() {}
}
