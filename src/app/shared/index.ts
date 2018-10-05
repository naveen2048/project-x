import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Components
import { HeaderTitleComponent } from "./header-title";
import { ToggleButton } from './toggle-button';

export const SharedComponents:any[] = [
    HeaderTitleComponent,
    ToggleButton
]

@NgModule({
    imports: [FormsModule],
    declarations: SharedComponents,
    exports: SharedComponents
  })
export class Shared {}