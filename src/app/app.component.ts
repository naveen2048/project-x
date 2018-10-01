import {Component, trigger, state, style, transition, animate} from '@angular/core';
import { BreadcrumbService } from 'ng5-breadcrumb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {
  title = 'app';

  menuState:string = 'out';

  constructor(private breadCumService:BreadcrumbService){}

  toggleMenu(event) {
    // 1-line if statement that toggles the value:
    this.menuState = event === 'out' ? 'in' : 'out';
  }
}
