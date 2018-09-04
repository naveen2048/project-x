import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { ShipmentsComponent } from "./shipments/shipments.component";
import { NewShipmentsComponent } from "./new-shipments/new-shipments.component";

export const Components = [ShipmentsComponent, NewShipmentsComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [Components],
  exports: [Components]
})
export class ShipmentsComponentsModule {}
