import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../global.variables';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imgLoading:string = GlobalVariable.LOAD_IMAGE;
  constructor() { }

  ngOnInit() {
  }
}
