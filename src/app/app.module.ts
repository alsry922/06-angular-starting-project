import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HeaderComponent} from "./header/header.component";
import {ServerStatusComponent} from "./dashboard/server-status/server-status.component";
import {TrafficComponent} from "./dashboard/traffic/traffic.component";
import {TicketsComponent} from "./dashboard/tickets/tickets.component";
import {DashboardItemComponent} from "./dashboard/dashboard-item/dashboard-item.component";
import {TicketsModule} from "./dashboard/tickets/tickets.module";
import {SharedModule} from "./shared/shared.module";
import {HeaderModule} from "./header/header.module";

@NgModule({
  declarations: [AppComponent, ServerStatusComponent, TrafficComponent, DashboardItemComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, TicketsModule, SharedModule, HeaderModule],
})
export class AppModule {
}
