import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { rootRoutes } from "./app.routing";
import { Components } from "./components/index";
import { ImgDirective } from "./directives/image-loading.directive";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//3rd party libraries
import { SidebarModule } from "ng-sidebar";
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { Ng5BreadcrumbModule, BreadcrumbService } from 'ng5-breadcrumb';
import { UiSwitchModule } from 'ngx-ui-switch';

@NgModule({
  declarations: [AppComponent, Components, SideBarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    UiSwitchModule,
    Ng5BreadcrumbModule.forRoot(),
    RouterModule.forRoot(rootRoutes, { useHash: true }),
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
