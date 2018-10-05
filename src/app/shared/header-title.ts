import { Component, Input } from "@angular/core";

@Component({
  selector: "app-header-title",
  template: `
  <div class="row">
  <div class="col-sm-12">
  <h2>{{title | uppercase}}</h2>
  <hr/>
  </div>
  </div>
  `,
  styleUrls: []
})
export class HeaderTitleComponent {
  @Input()
  title: string;
}
