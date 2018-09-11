import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewShipmentsComponent } from './new-shipments/new-shipments.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ShipmentsComponentsModule } from '.';
import { RouterModule } from '@angular/router';
import { ShipmentsRoutes } from './shipment-routing';

@NgModule({
  imports: [
    CommonModule,
    ShipmentsComponentsModule,
    RouterModule.forChild(ShipmentsRoutes)
  ],
  declarations: []
})
export class ShipmentsModule { }
