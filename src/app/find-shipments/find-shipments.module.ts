import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsFindShipments } from './index';
import {AgmCoreModule} from '@agm/core'
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ComponentsFindShipments,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyDyjSfwQglI1lO4t8Mg1H0D-bZXtjUMsIs",
      libraries:["places"]
    })
  ],
  declarations: []
})
export class FindShipmentsModule { }
