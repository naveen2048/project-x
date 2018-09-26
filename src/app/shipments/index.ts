import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { ShipmentsComponent } from "./shipments/shipments.component";
import { NewShipmentsComponent } from "./new-shipments/new-shipments.component";

import { HighLightDirective } from '../directives/section-highlighter.directive';
import { ImgDirective } from "../directives/image-loading.directive";
import { ShipComponent } from "./ship/ship.component";
import { ShipmentInformationComponent } from './shipment-information/shipment-information.component';

export const Components = [
  ShipmentsComponent, 
  NewShipmentsComponent, 
  HighLightDirective, 
  ShipComponent,
  ShipmentInformationComponent
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [Components],
  exports: [Components]
})
export class ShipmentsComponentsModule {}
