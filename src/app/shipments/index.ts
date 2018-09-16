import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { ShipmentsComponent } from "./shipments/shipments.component";
import { NewShipmentsComponent } from "./new-shipments/new-shipments.component";
import { HighLightDirective } from '../directives/section-highlighter.directive';
import { ImgDirective } from "../directives/image-loading.directive";

export const Components = [ShipmentsComponent, NewShipmentsComponent, HighLightDirective];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [Components],
  exports: [Components]
})
export class ShipmentsComponentsModule {}
