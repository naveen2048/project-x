import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const rootRoutes: Routes = [
    { path:'', redirectTo:'home', pathMatch:'full' },
    { path:'home', component: HomeComponent },
    { path:'find-shipments', loadChildren: './find-shipments/find-shipments.module#FindShipmentsModule' },
    { path:'new-shipment', loadChildren: './shipments/shipments.module#ShipmentsModule' }
]