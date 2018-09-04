import { NgModule } from "@angular/core";
import { ShipmentsListComponent } from "./shipments-list/shipments-list.component";
import { ShipmentsFilterSectionComponent } from "./shipments-filter-section/shipments-filter-section.component";
import { ShipmentsComponent } from "./shipments/shipments.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FindShipmentsRoutes } from "./find-shipments-routing";

export const Components = [
  ShipmentsListComponent,
  ShipmentsFilterSectionComponent,
  ShipmentsComponent
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(FindShipmentsRoutes)],
  declarations: [Components],
  exports: [Components]
})
export class ComponentsFindShipments {}
