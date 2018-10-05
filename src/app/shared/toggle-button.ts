import { Component, Input, Output, style, EventEmitter } from "@angular/core";

@Component({
  selector: "toggle-button",
  template: `
   <label class="switch">
   <input type="checkbox" (change)="onChange()">
   <span class="slider round"></span>
   </label>
  `,
  styles: [
    `
      .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
      }

      .switch input {
        display: none;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }

      .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }

      input:checked + .slider {
        background-color: #2196f3;
      }

      input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
      }

      input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }

      /* Rounded sliders */
      .slider.round {
        border-radius: 34px;
      }

      .slider.round:before {
        border-radius: 50%;
      }
    `
  ]
})
export class ToggleButton {
  isChecked: boolean = false;
  checked: string;

  @Input()
  description: string;

  @Input()
  set toggle(checked: boolean) {
    this.isChecked = checked;
    this.checked = checked ? "checked" : "";
  }

  @Output()
  toggleEvent = new EventEmitter<boolean>();

  onChange() {
    let value = (this.isChecked = !this.isChecked);
    this.toggleEvent.emit(value);
  }
}
