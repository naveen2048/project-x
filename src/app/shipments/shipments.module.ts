import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentsComponentsModule } from '.';
import { RouterModule } from '@angular/router';
import { ShipmentsRoutes } from './shipment-routing';

//3rd Party libraries
import { TabModule } from 'angular-tabs-component';
import { UiSwitchModule } from 'ngx-ui-switch';

//Internal modules

@NgModule({
  imports: [
    CommonModule,
    TabModule,
    ShipmentsComponentsModule,
    UiSwitchModule,
    RouterModule.forChild(ShipmentsRoutes)
  ],
  declarations: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ShipmentsModule { }
