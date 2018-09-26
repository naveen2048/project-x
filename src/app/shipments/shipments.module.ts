import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentsComponentsModule } from '.';
import { RouterModule } from '@angular/router';
import { ShipmentsRoutes } from './shipment-routing';
import { ImgDirective } from '../directives/image-loading.directive';
import { HighLightDirective } from '../directives/section-highlighter.directive';
import { Components } from './index';

@NgModule({
  imports: [
    CommonModule,
    ShipmentsComponentsModule,
    RouterModule.forChild(ShipmentsRoutes)
  ],
  declarations: []
})
export class ShipmentsModule { }
