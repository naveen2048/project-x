import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { rootRoutes } from "./app.routing";
import { Components } from "./components/index";
import { ImgDirective } from "./directives/image-loading.directive";

//3rd party libraries
import { SidebarModule } from "ng-sidebar";
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [AppComponent, Components, SideBarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rootRoutes, { useHash: true }),
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
