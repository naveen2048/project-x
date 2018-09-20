import { Routes } from '@angular/router';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ShipComponent } from './ship/ship.component';

export const ShipmentsRoutes: Routes = [
    { path:'' , redirectTo:'shipments', pathMatch:'full' },
    { path:'shipments', component: ShipmentsComponent },
    { path:'ship/:d', component: ShipComponent }
];