import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HeaderComponent} from "./header/header.component";
import {ServerStatusComponent} from "./dashboard/server-status/server-status.component";
import {TrafficComponent} from "./dashboard/traffic/traffic.component";
import {TicketsComponent} from "./dashboard/tickets/tickets.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, ServerStatusComponent, TrafficComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, TicketsComponent],
})
export class AppModule {}
