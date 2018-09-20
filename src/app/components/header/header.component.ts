import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imgsrc:string = "../../assets/images/car.png";

  @Output() toggleMenu = new EventEmitter();

  showMenu:string = 'in';

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.showMenu = this.showMenu === "in" ? 'out' : 'in';
    this.toggleMenu.emit(this.showMenu);
  }

}
