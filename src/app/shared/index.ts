import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//3rd party
import { UiSwitchModule } from 'ngx-toggle-switch';
//Components
import { HeaderTitleComponent } from "./header-title";
import { ToggleButton } from './toggle-button';

export const SharedComponents:any[] = [
    HeaderTitleComponent,
    ToggleButton
]

@NgModule({
    imports: [FormsModule, UiSwitchModule],
    declarations: SharedComponents,
    exports: SharedComponents
  })
export class SharedModule {}