import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DatatableComponent } from "./datatable/datatable.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

@NgModule({
  declarations: [AppComponent, DatatableComponent],
  imports: [BrowserModule, NgxDatatableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
