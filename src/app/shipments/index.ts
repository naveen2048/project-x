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
import { WhatAreYouShippingComponent } from "./what-are-you-shipping/what-are-you-shipping.component";
import { HeaderTitleComponent } from '../shared/header-title';
import { ToggleButton } from '../shared/toggle-button';
import { LocationSearchComponent } from '../shared/location-search';
import { PricingSuggestComponent } from "./pricing-suggest/pricing-suggest.component";


export const Components = [
  ShipmentsComponent, 
  NewShipmentsComponent, 
  HighLightDirective, 
  ShipComponent,
  ShipmentInformationComponent,
  PickInformationComponent,
  ShipListingComponent,
  WhatAreYouShippingComponent,
  HeaderTitleComponent,
  ToggleButton,
  LocationSearchComponent,
  PricingSuggestComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, TabModule],
  declarations: [Components],
  exports: [Components],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ShipmentsComponentsModule {}
