import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AgmCoreModule } from "@agm/core";

//3rd party
import { UiSwitchModule } from "ngx-toggle-switch";
//Components
import { HeaderTitleComponent } from "./header-title";
import { ToggleButton } from "./toggle-button";
import { LocationSearchComponent } from "./location-search";

export const SharedComponents: any[] = [
  HeaderTitleComponent,
  ToggleButton,
  LocationSearchComponent
];

@NgModule({
  imports: [
    FormsModule,
    UiSwitchModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDyjSfwQglI1lO4t8Mg1H0D-bZXtjUMsIs",
      libraries: ["places"]
    })
  ],
  declarations: SharedComponents,
  exports: SharedComponents,
  providers:[]
})
export class SharedModule {}
