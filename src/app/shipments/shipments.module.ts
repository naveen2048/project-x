import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewShipmentsComponent } from './new-shipments/new-shipments.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ShipmentsComponentsModule } from '.';

@NgModule({
  imports: [
    CommonModule,
    ShipmentsComponentsModule
  ],
  declarations: []
})
export class ShipmentsModule { }
