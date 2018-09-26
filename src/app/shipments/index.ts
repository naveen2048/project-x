import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { ShipmentsComponent } from "./shipments/shipments.component";
import { NewShipmentsComponent } from "./new-shipments/new-shipments.component";

import { HighLightDirective } from '../directives/section-highlighter.directive';
import { ImgDirective } from "../directives/image-loading.directive";
import { ShipComponent } from "./ship/ship.component";
import { ShipmentInformationComponent } from './shipment-information/shipment-information.component';
import { PickInformationComponent } from './pick-information/pick-information.component';
import { ShipListingComponent } from './ship-listing/ship-listing.component';
import { TabModule } from "angular-tabs-component";

export const Components = [
  ShipmentsComponent, 
  NewShipmentsComponent, 
  HighLightDirective, 
  ShipComponent,
  ShipmentInformationComponent,
  PickInformationComponent,
  ShipListingComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, TabModule],
  declarations: [Components],
  exports: [Components],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ShipmentsComponentsModule {}
