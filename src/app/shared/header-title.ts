import { Component, Input } from "@angular/core";

@Component({
  selector: "app-header-title",
  template: `
  <div class="row">
  <div class="col-sm-12">
  <h2>{{title | uppercase}}</h2>
  <p class="helperText">{{caption}}</p>
  <hr/>
  </div>
  </div>
  `,
  styles: [
    ` .helperText {
        color: #999;
        font-size: 1.875rem;
        letter-spacing: 0.025rem;
        line-height: 1.125rem;
      }
    `
  ]
})
export class HeaderTitleComponent {
  @Input()
  title: string;
  @Input()
  caption: string;
}
