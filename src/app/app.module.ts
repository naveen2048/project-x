import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { rootRoutes } from "./app.routing";
import { Components } from "./components/index";
import { ImgDirective } from './directives/image-loading.directive';

@NgModule({
  declarations: [AppComponent, Components],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(rootRoutes, {useHash:true})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
