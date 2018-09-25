import { Component, OnInit, Directive } from '@angular/core';
import { ImgDirective } from '../../directives/image-loading.directive';
import { HighLightDirective } from '../../directives/section-highlighter.directive';

//Model
import { categories } from '../../models/categories.model';

@Component({
  selector: 'app-new-shipments',
  templateUrl: './new-shipments.component.html',
  styleUrls: ['./new-shipments.component.css']
})
export class NewShipmentsComponent implements OnInit {
  data:any[] = categories;
  constructor() { }
  ngOnInit() {
  }

}
