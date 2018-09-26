import { Routes } from '@angular/router';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ShipComponent } from './ship/ship.component';
import { ShipmentInformationComponent } from './shipment-information/shipment-information.component';
import { ShipListingComponent } from './ship-listing/ship-listing.component';

export const ShipmentsRoutes: Routes = [
    { path:'' , redirectTo:'shipments', pathMatch:'full' },
    { path:'shipments', component: ShipmentsComponent },
    { path:'ship/:d', component: ShipComponent },
    { path:'ship-info/:d', component: ShipListingComponent }
];